import prisma from "../../models/user";
import jwt from "jsonwebtoken";
import {
  UserRegisterInput,
  UserRegisterToken,
} from "../../schemas/user.schema";
import fs from "node:fs";
import { hashPassword } from "../shared/password.service";
const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;

// Función para crear un nuevo usuario estudiante en la base de datos
export const createUser = async (user: UserRegisterInput, pdfUrl: string) => {
  const hashedPassword = await hashPassword(user.password);
  const newUser = await prisma.create({
    data: {
      studentRut: user.studentRut,
      studentEmail: user.studentEmail,
      studentName: user.studentName,
      password: hashedPassword,
      studentCollege: user.studentCollege,
      studentCertificateUrl: pdfUrl,
      role: "student",
    },
  });
  return newUser;
};

//Buscar usuario por email para el login
export const findUserByEmail = async (email: string) => {
  const user = await prisma.findUnique({
    where: {
      studentEmail: email,
    },
  });
  return user;
};

//Generar un token para el usuario al loguearse
export const generateClientToken = (user: UserRegisterToken): string => {
  if (!PRIVATE_KEY_PATH) {
    throw new Error("PRIVATE_KEY_PATH no está configurado");
  }

  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, "utf8");

  const payload = {
    id: user.id,
    studentRut: user.studentRut,
    studentEmail: user.studentEmail,
    studentName: user.studentName,
    role: user.role,
  };

  return jwt.sign(payload, privateKey, {
    algorithm: "RS256",
    expiresIn: "24h",
  });
};
