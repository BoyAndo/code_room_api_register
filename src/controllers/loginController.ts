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
      res
        .status(400)
        .json({ success: false, message: "Email y contraseña son requeridos" });
      return;
    }

    //traemos la función findUserByEmail del servicio de autenticación
    const user = await findUserByEmail(email);

    if (!user) {
      res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });
      return;
    }

    // Verificar la contraseña (aquí deberías implementar la lógica de comparación de contraseñas)
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      res
        .status(401)
        .json({ success: false, message: "Contraseña incorrecta" });
      return;
    }

    // Generar el payload para el token
    if (user.role == "student") {
      const clientTokenPayload = {
        id: user.id,
        studentRut: user.studentRut,
        studentEmail: user.studentEmail,
        studentName: user.studentName,
        studentCollege: user.studentCollege,
        studentCertificateUrl: user.studentCertificateUrl,
        role: user.role,
      };
      const token = generateClientToken(clientTokenPayload);
      //configurar cookie que contendrá el token con httpOnly
      res.cookie("authToken", token, {
        httpOnly: true, //no accesible con xss
        sameSite: "strict", //evita el envío en solicitudes de otros dominios
        maxAge: 24 * 60 * 60 * 1000, //1 día
      });

      res.status(200).json({ success: true, token });
    } //proximamente generar el payload para el token de usuario arrendador
  } catch (error) {
    console.error("Error en el controlador de inicio de sesión:", error);
    res
      .status(500)
      .json({ success: false, message: "Error interno del servidor" });
    return;
  }
};
