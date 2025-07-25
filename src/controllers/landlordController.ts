import { Request, Response } from "express";
import { landlordSchema } from "../schemas/landlord.schema";
import {
  createLandlord,
  generateLandlordToken,
  checkExistingLandlord,
} from "../services/landlordServices/landlord.auth.service";
import { extractLandlordInfo } from "../services/landlordServices/extractLandlordInfo";
import {
  allWordsExist,
  normalizeRut,
  wordsMatchPercentage,
} from "../services/shared/normalize";
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

    // Extraer datos del carnet desde el buffer
    const landlordCarnetInfo = await extractLandlordInfo(req.file.buffer);
    console.log("Datos del carnet extraídos:", landlordCarnetInfo);

    // Comparar los datos del carnet con los datos del formulario
    if (landlordCarnetInfo && landlordCarnetInfo.success) {
      const normalizedFormRut = normalizeRut(landlordRegisterInfo.landlordRut);
      const normalizedCarnetRut = normalizeRut(landlordCarnetInfo.data.rut);

      // Verificar que el RUT coincida
      if (normalizedFormRut !== normalizedCarnetRut) {
        res.status(400).json({
          success: false,
          message: "El RUT del formulario no coincide con el del carnet",
        });
        return;
      }

      // Verificar que el nombre coincida (al menos 80% de las palabras)
      const formNameWords = landlordRegisterInfo.landlordName
        .toLowerCase()
        .split(" ");
      const carnetNameWords = landlordCarnetInfo.data.name
        .toLowerCase()
        .split(" ");

      if (!wordsMatchPercentage(formNameWords, carnetNameWords, 0.8)) {
        res.status(400).json({
          success: false,
          message:
            "El nombre del formulario no coincide suficientemente con el del carnet",
        });
        return;
      }
    } else {
      console.warn(
        "⚠️ No se pudo extraer información del carnet, continuando sin validación"
      );
    }

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
