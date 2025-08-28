import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../shared/password.service";

const prisma = new PrismaClient();

// Función para verificar si ya existe un estudiante
export const checkExistingStudent = async (email: string, rut: string) => {
  return await prisma.student.findFirst({
    where: {
      OR: [{ studentEmail: email }, { studentRut: rut }],
    },
  });
};

// Función para crear un nuevo estudiante
export const createStudent = async (user: any, pdfUrl: string) => {
  const hashedPassword = await hashPassword(user.password);
  
  return await prisma.student.create({
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
};