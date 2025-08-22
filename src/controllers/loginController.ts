import { Request, Response } from "express";
import {
  findUserByEmail,
  generateClientToken,
} from "../services/studentServices/student.auth.service";
import { compare } from "bcrypt";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Email y contraseña son requeridos" 
      });
    }

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

    if (user.role == "student") {
      const clientTokenPayload = {
        id: user.id,
        studentRut: user.studentRut,
        studentEmail: user.studentEmail,
        studentName: user.studentName,
        studentCollege: user.studentCollege, // ← Asegúrate de que esto existe
        studentCertificateUrl: user.studentCertificateUrl, // ← Y esto también
        role: user.role,
      };

      console.log('User object from DB:', user); // ← Debug
      console.log('Token payload:', clientTokenPayload); // ← Debug

      const token = generateClientToken(clientTokenPayload);
      
      res.cookie("authToken", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ 
        success: true, 
        token,
        user: clientTokenPayload // ← Envía también los datos del usuario para debug
      });
    }

    return res.status(403).json({ 
      success: false, 
      message: "Rol no válido" 
    });

  } catch (error) {
    console.error("Error en el controlador de inicio de sesión:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Error interno del servidor" 
    });
  }
};
