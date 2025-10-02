import { PrismaClient } from "../../generated/prisma";
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
      // Campos obligatorios de ubicación
      regionId: user.regionId,
      comunaId: user.comunaId,
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

//Generar un access token para el usuario al loguearse usando HMAC (15 minutos)
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
    studentCollege: user.studentCollege,
    role: user.role,
  };

  return jwt.sign(payload, JWT_SECRET!, {
    algorithm: "HS256",
    expiresIn: "15m", // Access token de corta duración
  } as jwt.SignOptions);
};
