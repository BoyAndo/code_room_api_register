import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class UserModel {
  // Crear un nuevo estudiante
  static async createUser(userData: {
    studentRut: string;
    studentEmail: string;
    studentName: string;
    password: string;
    studentCollege: string;
    studentCertificateUrl: string;
    regionId: number;
    comunaId: number;
  }) {
    return await prisma.student.create({
      data: {
        ...userData,
        role: "student",
      },
    });
  }

  // Buscar estudiante por email
  static async findByEmail(email: string) {
    return await prisma.student.findUnique({
      where: { studentEmail: email },
    });
  }

  // Buscar estudiante por RUT
  static async findByRut(rut: string) {
    return await prisma.student.findUnique({
      where: { studentRut: rut },
    });
  }

  // Buscar estudiante por ID
  static async findById(id: number) {
    return await prisma.student.findUnique({
      where: { id },
    });
  }

  // Verificar si ya existe un estudiante con el mismo email o RUT
  static async checkExistingUser(email: string, rut: string) {
    return await prisma.student.findFirst({
      where: {
        OR: [{ studentEmail: email }, { studentRut: rut }],
      },
    });
  }
}

export default prisma;
