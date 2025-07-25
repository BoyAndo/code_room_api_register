import { Request, Response } from "express";
import { landlordSchema } from "../schemas/landlord.schema";
import {
  createLandlord,
  generateLandlordToken,
  checkExistingLandlord,
} from "../services/landlordServices/landlord.auth.service";
import { extractLandlordInfo } from "../services/landlordServices/extractLandlordInfo";
import { uploadImageToBucket } from "../services/shared/s3Service";

export const registerLandlord = async (req: Request, res: Response) => {
  try {
    // Validar y obtener datos del formulario
    const landlordRegisterInfo = landlordSchema.parse(req.body);

    // debugging: Imprimir datos del formulario
    console.log("Datos del formulario arrendador:", landlordRegisterInfo);
    console.log("Archivo de carnet recibido:", req.file?.originalname);

    // Verificar si se recibió un archivo de imagen del carnet
    if (!req.file || !req.file.buffer) {
      res.status(400).json({
        success: false,
        message: "Imagen del carnet no enviada o vacía",
      });
      return;
    }

    // Verificar si ya existe un arrendador con el mismo email o RUT
    const existingLandlord = await checkExistingLandlord(
      landlordRegisterInfo.landlordEmail,
      landlordRegisterInfo.landlordRut
    );

    if (existingLandlord) {
      res.status(409).json({
        success: false,
        message: "Ya existe un arrendador registrado con este email o RUT",
      });
      return;
    }

    // Extraer y validar datos del carnet contra el formulario
    const validationResult = await extractLandlordInfo(req.file.buffer, {
      landlordName: landlordRegisterInfo.landlordName,
      landlordRut: landlordRegisterInfo.landlordRut,
    });

    console.log("🔍 Resultado de validación:", validationResult);

    // Verificar si la validación fue exitosa
    if (!validationResult.isValid) {
      let errorMessage = "Los datos del carnet no coinciden con el formulario:";
      if (!validationResult.matchDetails.nameFound) {
        errorMessage += " El nombre no se encontró en el carnet.";
      }
      if (!validationResult.matchDetails.rutFound) {
        errorMessage += " El RUT no se encontró en el carnet.";
      }

      res.status(400).json({
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
      return;
    }

    // Verificar confianza mínima en la extracción
    if (validationResult.confidence < 60) {
      console.warn(
        `⚠️ Confianza baja en validación: ${validationResult.confidence}%`
      );

      res.status(400).json({
        success: false,
        message: `La calidad de la imagen del carnet es insuficiente. Confianza: ${validationResult.confidence}%. Por favor, envía una imagen más clara.`,
        details: {
          confidence: validationResult.confidence,
          matchDetails: validationResult.matchDetails,
        },
      });
      return;
    }

    console.log("✅ Validación del carnet exitosa con alta confianza");

    // Subir imagen del carnet a S3/MinIO
    const carnetUrl = await uploadImageToBucket(
      req.file.buffer,
      req.file.originalname || "carnet.jpg"
    );
    console.log("Carnet subido a:", carnetUrl);

    // Crear arrendador en la base de datos
    const newLandlord = await createLandlord(landlordRegisterInfo, carnetUrl);

    // Generar token JWT
    const token = generateLandlordToken({
      id: newLandlord.id,
      landlordRut: newLandlord.landlordRut,
      landlordEmail: newLandlord.landlordEmail,
      landlordName: newLandlord.landlordName,
      role: newLandlord.role,
    });

    console.log(
      "✅ Arrendador registrado exitosamente:",
      newLandlord.landlordEmail
    );

    res.status(201).json({
      success: true,
      message: "Arrendador registrado exitosamente",
      data: {
        landlord: {
          id: newLandlord.id,
          landlordRut: newLandlord.landlordRut,
          landlordEmail: newLandlord.landlordEmail,
          landlordName: newLandlord.landlordName,
          role: newLandlord.role,
        },
        token,
        validation: {
          confidence: validationResult.confidence,
          verified: true,
          message: "Identidad verificada exitosamente mediante carnet",
          matchDetails: validationResult.matchDetails,
        },
      },
    });
  } catch (error) {
    console.error("❌ Error registrando arrendador:", error);

    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: "Error interno del servidor",
        error: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Error interno del servidor desconocido",
      });
    }
  }
};
