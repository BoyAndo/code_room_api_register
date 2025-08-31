import { Request, Response } from "express";
import {
  findUserByEmail as findStudentByEmail,
  generateClientToken,
} from "../services/studentServices/student.auth.service";
import {
  findLandlordByEmail,
  generateLandlordToken,
} from "../services/landlordServices/landlord.auth.service";
import { compare } from "bcrypt";
import {
  AuthenticatedUser,
  StudentFromDB,
  LandlordFromDB,
  UserType,
  LoginResponse,
  isStudentUser,
  isLandlordUser,
} from "../types/auth.types";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, message: "Email y contraseña son requeridos" });
      return;
    }

    // Buscar usuario en ambas tablas: student y landlord
    let user: AuthenticatedUser | null = null;
    let userType: UserType | null = null;

    // Primero buscar en estudiantes
    const student = await findStudentByEmail(email);
    if (student) {
      user = student as StudentFromDB;
      userType = "student";
    } else {
      // Si no es estudiante, buscar en landlords
      const landlord = await findLandlordByEmail(email);
      if (landlord) {
        user = landlord as LandlordFromDB;
        userType = "landlord";
      }
    }

    if (!user || !userType) {
      res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });
      return;
    }

    // Verificar la contraseña
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      res
        .status(401)
        .json({ success: false, message: "Contraseña incorrecta" });
      return;
    }

    // Generar token según el tipo de usuario usando type guards
    let token: string;

    if (isStudentUser(user)) {
      const clientTokenPayload = {
        id: user.id,
        studentRut: user.studentRut,
        studentEmail: user.studentEmail,
        studentName: user.studentName,
        studentCollege: user.studentCollege,
        studentCertificateUrl: user.studentCertificateUrl,
        role: user.role,
      };
      token = generateClientToken(clientTokenPayload);
    } else if (isLandlordUser(user)) {
      const landlordTokenPayload = {
        id: user.id,
        landlordRut: user.landlordRut,
        landlordEmail: user.landlordEmail,
        landlordName: user.landlordName,
        landlordCarnetUrl: user.landlordCarnetUrl,
        role: user.role,
      };
      token = generateLandlordToken(landlordTokenPayload);
    } else {
      res
        .status(500)
        .json({ success: false, message: "Tipo de usuario no válido" });
      return;
    }

    // Configurar cookie que contendrá el token con httpOnly
    res.cookie("authToken", token, {
      httpOnly: true, // No accesible con XSS
      sameSite: "lax", // Balance entre seguridad y UX
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
    });

    const response: LoginResponse = {
      success: true,
      token,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error en el controlador de inicio de sesión:", error);
    res
      .status(500)
      .json({ success: false, message: "Error interno del servidor" });
    return;
  }
};
