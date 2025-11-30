import { Request, Response } from "express";
import { getCurrentUser } from "../middlewares/auth.middleware.js";
import {
  verifyRefreshToken,
  revokeRefreshToken,
  rotateRefreshToken,
  generateAccessToken,
} from "../services/shared/refresh-token.service.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getMeController = async (req: Request, res: Response) => {
  try {
    const userFromToken = getCurrentUser(req);
    
    // Consultar la base de datos para obtener datos actualizados (incluyendo profilePhotoUrl)
    let userFromDB;
    
    if (userFromToken.role === "student") {
      userFromDB = await prisma.student.findUnique({
        where: { id: userFromToken.id },
        select: {
          id: true,
          studentRut: true,
          studentEmail: true,
          studentName: true,
          studentCollege: true,
          studentCertificateUrl: true,
          profilePhotoUrl: true,
          role: true,
        },
      });
    } else if (userFromToken.role === "landlord") {
      userFromDB = await prisma.landlord.findUnique({
        where: { id: userFromToken.id },
        select: {
          id: true,
          landlordRut: true,
          landlordEmail: true,
          landlordName: true,
          landlordCarnetUrl: true,
          profilePhotoUrl: true,
          role: true,
        },
      });
    }

    if (!userFromDB) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    return res.status(200).json({
      success: true,
      user: userFromDB,
      message: "Usuario obtenido exitosamente",
    });
  } catch (error) {
    console.error("Error getting current user:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};

export const logoutController = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    // Revocar el refresh token si existe
    if (refreshToken) {
      await revokeRefreshToken(refreshToken);
    }

    // Clear both authentication cookies
    res.clearCookie("authToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logout exitoso",
    });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};

export const refreshTokenController = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "No se proporcionó refresh token",
      });
    }

    // Verificar el refresh token
    const verification = await verifyRefreshToken(refreshToken);

    if (!verification.valid) {
      return res.status(401).json({
        success: false,
        message: verification.error || "Refresh token inválido",
      });
    }

    const { userId, userType } = verification.payload;

    // Buscar el usuario en la base de datos para generar nuevo access token
    let user: any = null;

    if (userType === "student") {
      user = await prisma.student.findUnique({
        where: { id: userId },
      });
    } else if (userType === "landlord") {
      user = await prisma.landlord.findUnique({
        where: { id: userId },
      });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    // Generar nuevo access token
    let tokenPayload: any;

    if (userType === "student") {
      tokenPayload = {
        id: user.id,
        studentRut: user.studentRut,
        studentEmail: user.studentEmail,
        studentName: user.studentName,
        studentCollege: user.studentCollege,
        role: user.role,
      };
    } else {
      tokenPayload = {
        id: user.id,
        landlordRut: user.landlordRut,
        landlordEmail: user.landlordEmail,
        landlordName: user.landlordName,
        role: user.role,
      };
    }

    const newAccessToken = generateAccessToken(tokenPayload);

    // Rotar el refresh token (opcional pero recomendado para mayor seguridad)
    const newRefreshToken = await rotateRefreshToken(
      refreshToken,
      userId,
      userType
    );

    if (!newRefreshToken) {
      return res.status(500).json({
        success: false,
        message: "Error al rotar refresh token",
      });
    }

    // Configurar nuevas cookies
    res.cookie("authToken", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Token renovado exitosamente",
      token: newAccessToken, // Por compatibilidad
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};
