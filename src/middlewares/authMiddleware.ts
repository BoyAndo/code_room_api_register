import { Request, Response, NextFunction } from "express";
import { verifyAndDecodeToken } from "../utils/tokenUtils";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = verifyAndDecodeToken(token);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export const requireStudent = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== "student") {
    return res.status(403).json({
      success: false,
      message: "Acceso denegado: se requiere rol de estudiante",
    });
  }
  next();
};

export const requireLandlord = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== "landlord") {
    return res.status(403).json({
      success: false,
      message: "Acceso denegado: se requiere rol de propietario",
    });
  }
  next();
};