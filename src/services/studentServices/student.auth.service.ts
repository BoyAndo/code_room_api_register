import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import {
  StudentRegisterInput,
  StudentRegisterToken,
} from "../../schemas/student.schema";
import { hashPassword } from "../shared/password.service";

const prisma = new PrismaClient();

// Función para verificar si ya existe un estudiante con el mismo RUT o email
export const checkExistingStudent = async (email: string, rut: string) => {
  const existingStudent = await prisma.student.findFirst({
    where: {
      OR: [{ studentEmail: email }, { studentRut: rut }],
    },
  });

  return existingStudent;
};

// Función para crear un nuevo usuario estudiante en la base de datos
export const createUser = async (
  user: StudentRegisterInput,
  pdfUrl: string
) => {
  // Verificar si ya existe un estudiante con el mismo RUT o email
  const existingStudent = await checkExistingStudent(
    user.studentEmail,
    user.studentRut
  );

  if (existingStudent) {
    if (existingStudent.studentRut === user.studentRut) {
      throw new Error(
        `Ya existe un estudiante registrado con el RUT: ${user.studentRut}`
      );
    }
    if (existingStudent.studentEmail === user.studentEmail) {
      throw new Error(
        `Ya existe un estudiante registrado con el email: ${user.studentEmail}`
      );
    }
  }

  const hashedPassword = await hashPassword(user.password);
  const newUser = await prisma.student.create({
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
  const user = await prisma.student.findUnique({
    where: {
      studentEmail: email,
    },
  });
  return user;
};

//Generar un token para el usuario al loguearse usando HMAC
export const generateClientToken = (user: StudentRegisterToken): string => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error(
      "JWT_SECRET no está configurado en las variables de entorno"
    );
  }

  const payload = {
    id: user.id,
    studentRut: user.studentRut,
    studentEmail: user.studentEmail,
    studentName: user.studentName,
    role: user.role,
  };

  return jwt.sign(payload, JWT_SECRET!, {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRES_IN || "24h",
  } as jwt.SignOptions);
};
