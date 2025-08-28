import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../shared/password.service";

const prisma = new PrismaClient();

// Función para verificar si ya existe un landlord
export const checkExistingLandlord = async (email: string, rut: string) => {
  return await prisma.landlord.findFirst({
    where: {
      OR: [{ landlordEmail: email }, { landlordRut: rut }],
    },
  });
};

// Función para crear un nuevo landlord
export const createLandlord = async (landlord: any, carnetUrl: string) => {
  const hashedPassword = await hashPassword(landlord.password);

  return await prisma.landlord.create({
    data: {
      landlordRut: landlord.landlordRut,
      landlordEmail: landlord.landlordEmail,
      landlordName: landlord.landlordName,
      password: hashedPassword,
      landlordCarnetUrl: carnetUrl,
      role: "landlord",
    },
  });
};

// Función para buscar landlord por email
export const findLandlordByEmail = async (email: string) => {
  return await prisma.landlord.findUnique({
    where: { landlordEmail: email }
  });
};