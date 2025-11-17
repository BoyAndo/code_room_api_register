import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { uploadProfilePhoto } from "../services/minioService";

const prisma = new PrismaClient();

export const uploadStudentPhoto = async (req: Request, res: Response) => {
  try {
    // El middleware verifyToken ya validó el token y puso el usuario en req.user
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "No autorizado",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No se ha proporcionado ninguna imagen",
      });
    }

    const photoUrl = await uploadProfilePhoto(req.file, `student-${userId}`);

    const student = await prisma.student.update({
      where: { id: userId },
      data: { profilePhotoUrl: photoUrl },
    });

    res.json({
      success: true,
      message: "Foto de perfil actualizada exitosamente",
      data: {
        profilePhotoUrl: student.profilePhotoUrl,
      },
    });
  } catch (error) {
    console.error("Error al subir la foto de perfil del estudiante:", error);
    res.status(500).json({
      success: false,
      message: "Error al subir la foto de perfil",
    });
  }
};

export const uploadLandlordPhoto = async (req: Request, res: Response) => {
  try {
    // El middleware verifyToken ya validó el token y puso el usuario en req.user
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "No autorizado",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No se ha proporcionado ninguna imagen",
      });
    }

    const photoUrl = await uploadProfilePhoto(req.file, `landlord-${userId}`);

    const landlord = await prisma.landlord.update({
      where: { id: userId },
      data: { profilePhotoUrl: photoUrl },
    });

    res.json({
      success: true,
      message: "Foto de perfil actualizada exitosamente",
      data: {
        profilePhotoUrl: landlord.profilePhotoUrl,
      },
    });
  } catch (error) {
    console.error("Error al subir la foto de perfil del propietario:", error);
    
    // Mensaje más específico según el tipo de error
    let errorMessage = "Error al subir la foto de perfil. Por favor, intenta nuevamente.";
    
    if (error instanceof Error) {
      if (error.message.includes('SignatureDoesNotMatch')) {
        errorMessage = "Error de configuración del servidor de almacenamiento. Por favor, contacta al administrador.";
      } else if (error.message.includes('ConnectionRefused')) {
        errorMessage = "El servicio de almacenamiento no está disponible. Por favor, intenta más tarde.";
      }
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};