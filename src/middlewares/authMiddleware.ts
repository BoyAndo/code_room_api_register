import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Leer el token desde la cookie authToken
  const token = req.cookies?.authToken;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Token requerido' });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ success: false, message: 'Error de configuración del servidor' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256']
    });
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(403).json({ success: false, message: 'Token inválido o expirado' });
  }
};