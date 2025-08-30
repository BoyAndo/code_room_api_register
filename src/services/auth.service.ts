import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Interfaces para los tipos de usuarios
export interface Student {
  id: number;
  studentRut: string;
  studentEmail: string;
  studentName: string;
  password: string;
  studentCollege: string;
  studentCertificateUrl: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Landlord {
  id: number;
  landlordRut: string;
  landlordEmail: string;
  landlordName: string;
  password: string;
  landlordCarnetUrl: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

type User = Student | Landlord;

// Buscar usuario por email en ambas tablas
export const findUserByEmail = async (email: string): Promise<User | null> => {
  // Primero buscar en estudiantes
  const student = await prisma.student.findUnique({
    where: { studentEmail: email }
  });

  if (student) {
    return student;
  }

  // Si no es estudiante, buscar en landlords
  const landlord = await prisma.landlord.findUnique({
    where: { landlordEmail: email }
  });

  return landlord;
};

// Función para verificar el tipo de usuario
const isStudent = (user: User): user is Student => {
  return (user as Student).studentRut !== undefined;
};

const isLandlord = (user: User): user is Landlord => {
  return (user as Landlord).landlordRut !== undefined;
};

// Generar token para estudiante
export const generateStudentToken = (student: Student): string => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("JWT_SECRET no configurado");

  const payload = {
    id: student.id,
    studentRut: student.studentRut,
    studentEmail: student.studentEmail,
    studentName: student.studentName,
    studentCollege: student.studentCollege,
    studentCertificateUrl: student.studentCertificateUrl,
    role: student.role,
  };

  return jwt.sign(payload, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "24h",
  });
};

// Generar token para landlord
export const generateLandlordToken = (landlord: Landlord): string => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("JWT_SECRET no configurado");

  const payload = {
    id: landlord.id,
    landlordRut: landlord.landlordRut,
    landlordEmail: landlord.landlordEmail,
    landlordName: landlord.landlordName,
    landlordCarnetUrl: landlord.landlordCarnetUrl,
    role: landlord.role,
  };

  return jwt.sign(payload, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "24h",
  });
};

// Función para generar token según el tipo de usuario
export const generateToken = (user: User): string => {
  if (isStudent(user)) {
    return generateStudentToken(user);
  } else if (isLandlord(user)) {
    return generateLandlordToken(user);
  } else {
    throw new Error("Tipo de usuario no válido");
  }
};