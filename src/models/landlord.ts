import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class LandlordModel {
  // Crear un nuevo arrendador
  static async createLandlord(landlordData: {
    landlordRut: string;
    landlordEmail: string;
    landlordName: string;
    password: string;
    landlordCarnetUrl: string;
    regionId: number;
    comunaId: number;
  }) {
    return await prisma.landlord.create({
      data: {
        ...landlordData,
        role: "landlord",
      },
    });
  }

  // Buscar arrendador por email
  static async findByEmail(email: string) {
    return await prisma.landlord.findUnique({
      where: { landlordEmail: email },
    });
  }

  // Buscar arrendador por RUT
  static async findByRut(rut: string) {
    return await prisma.landlord.findUnique({
      where: { landlordRut: rut },
    });
  }

  // Buscar arrendador por ID
  static async findById(id: number) {
    return await prisma.landlord.findUnique({
      where: { id },
    });
  }

  // Verificar si ya existe un arrendador con el mismo email o RUT
  static async checkExistingLandlord(email: string, rut: string) {
    return await prisma.landlord.findFirst({
      where: {
        OR: [{ landlordEmail: email }, { landlordRut: rut }],
      },
    });
  }
}

export default prisma;
