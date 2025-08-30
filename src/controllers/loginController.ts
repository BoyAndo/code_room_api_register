import { Request, Response } from "express";
import { compare } from "bcrypt";
import { 
  findUserByEmail, 
  generateStudentToken, 
  generateLandlordToken,
  Student,
  Landlord
} from "../services/auth.service";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Email y contraseña son requeridos" 
      });
    }

    // Buscar usuario en ambas tablas
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "Usuario no encontrado" 
      });
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false, 
        message: "Contraseña incorrecta" 
      });
    }

    // Generar token según el rol
    if (user.role === "student") {
      const token = generateStudentToken(user as Student);
      
      res.cookie("authToken", token, {
        httpOnly: true,
        sameSite: "lax", // Permite entre puertos distintos
        secure: false,    // true si usas HTTPS
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ 
        success: true, 
        token,
        userType: 'student'
      });
    } else if (user.role === "landlord") {
      const token = generateLandlordToken(user as Landlord);
      
      res.cookie("authToken", token, {
        httpOnly: true,
        sameSite: "lax", // Permite entre puertos distintos
        secure: false,    // true si usas HTTPS
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ 
        success: true, 
        token,
        userType: 'landlord'
      });
    } else {
      return res.status(403).json({ 
        success: false, 
        message: "Rol no válido" 
      });
    }

  } catch (error) {
    console.error("Error en el controlador de inicio de sesión:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Error interno del servidor" 
    });
  }
};