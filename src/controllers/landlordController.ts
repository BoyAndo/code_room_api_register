import { Request, Response } from "express";
import { landlordSchema } from "../schemas/landlord.schema";
import {
  createLandlord,
  checkExistingLandlord,
} from "../services/landlordServices/landlord.auth.service";
import { generateLandlordToken } from "../services/auth.service"; // ← Importar desde el nuevo servicio
import { extractLandlordInfo } from "../services/landlordServices/extractLandlordInfo";
import { uploadImageToBucket } from "../services/shared/s3Service";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const registerLandlord = async (req: Request, res: Response) => {
  try {
    const landlordRegisterInfo = landlordSchema.parse(req.body);

    console.log("Datos del formulario arrendador:", landlordRegisterInfo);
    console.log("Archivo de carnet recibido:", req.file?.originalname);

    if (!req.file || !req.file.buffer) {
      return res.status(400).json({
        success: false,
        message: "Imagen del carnet no enviada o vacía",
      });
    }

    // Verificar si ya existe un arrendador
    const existingLandlord = await checkExistingLandlord(
      landlordRegisterInfo.landlordEmail,
      landlordRegisterInfo.landlordRut
    );

    if (existingLandlord) {
      return res.status(409).json({
        success: false,
        message: "Ya existe un arrendador registrado con este email o RUT",
      });
    }

    // Extraer y validar datos del carnet
    const validationResult = await extractLandlordInfo(req.file.buffer, {
      landlordName: landlordRegisterInfo.landlordName,
      landlordRut: landlordRegisterInfo.landlordRut,
    });

    console.log("🔍 Resultado de validación:", validationResult);

    if (!validationResult.isValid) {
      let errorMessage = "Los datos del carnet no coinciden con el formulario:";
      if (!validationResult.matchDetails.nameFound) {
        errorMessage += " El nombre no se encontró en el carnet.";
      }
      if (!validationResult.matchDetails.rutFound) {
        errorMessage += " El RUT no se encontró en el carnet.";
      }

      return res.status(400).json({
        success: false,
        message: errorMessage,
        details: {
          form: {
            name: landlordRegisterInfo.landlordName,
            rut: landlordRegisterInfo.landlordRut,
          },
          matchDetails: validationResult.matchDetails,
          rawTextSample: validationResult.rawText.substring(0, 200) + "...",
        },
      });
    }

    if (validationResult.confidence < 60) {
      console.warn(`⚠️ Confianza baja en validación: ${validationResult.confidence}%`);
      return res.status(400).json({
        success: false,
        message: `La calidad de la imagen del carnet es insuficiente. Confianza: ${validationResult.confidence}%. Por favor, envía una imagen más clara.`,
        details: {
          confidence: validationResult.confidence,
          matchDetails: validationResult.matchDetails,
        },
      });
    }

    console.log("✅ Validación del carnet exitosa con alta confianza");

    // Subir imagen del carnet
    const carnetUrl = await uploadImageToBucket(
      req.file.buffer,
      req.file.originalname || "carnet.jpg"
    );
    console.log("Carnet subido a:", carnetUrl);

    // Crear arrendador
    const newLandlord = await createLandlord(landlordRegisterInfo, carnetUrl);

    // Generar token
    const token = generateLandlordToken(newLandlord);

    // Setear cookie con el token
    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log("✅ Arrendador registrado exitosamente:", newLandlord.landlordEmail);

    return res.status(201).json({
      success: true,
      message: "Arrendador registrado exitosamente",
      data: {
        token,
        userType: 'landlord'
      },
    });
  } catch (error) {
    console.error("❌ Error registrando arrendador:", error);

    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Error interno del servidor",
        error: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Error interno del servidor desconocido",
      });
    }
  }
};

export const getLandlords = async (req: Request, res: Response) => {
  try {
    const landlords = await prisma.landlord.findMany({
      select: {
        id: true,
        landlordName: true,
      },
    });
    res.json({ success: true, landlords });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al obtener landlords" });
  }
};