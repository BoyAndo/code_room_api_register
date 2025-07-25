import jwt from "jsonwebtoken";
import fs from "node:fs";
import {
  LandlordRegisterInput,
  LandlordRegisterToken,
} from "../../schemas/landlord.schema";
import { LandlordModel } from "../../models/landlord";
import { hashPassword } from "../shared/password.service";

const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;

// Función para crear un nuevo arrendador en la base de datos
export const createLandlord = async (
  landlord: LandlordRegisterInput,
  carnetUrl: string
) => {
  const hashedPassword = await hashPassword(landlord.password);

  const newLandlord = await LandlordModel.createLandlord({
    landlordRut: landlord.landlordRut,
    landlordEmail: landlord.landlordEmail,
    landlordName: landlord.landlordName,
    password: hashedPassword,
    landlordCarnetUrl: carnetUrl,
  });

  return newLandlord;
};

// Función para buscar arrendador por email
export const findLandlordByEmail = async (email: string) => {
  return await LandlordModel.findByEmail(email);
};

// Función para generar token JWT para arrendador
export const generateLandlordToken = (
  landlord: LandlordRegisterToken
): string => {
  if (!PRIVATE_KEY_PATH) {
    throw new Error("PRIVATE_KEY_PATH no está configurado");
  }

  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, "utf8");

  const payload = {
    id: landlord.id,
    landlordRut: landlord.landlordRut,
    landlordEmail: landlord.landlordEmail,
    landlordName: landlord.landlordName,
    role: landlord.role,
  };

  return jwt.sign(payload, privateKey, {
    algorithm: "RS256",
    expiresIn: "24h",
  });
};

// Función para verificar si ya existe un arrendador
export const checkExistingLandlord = async (email: string, rut: string) => {
  return await LandlordModel.checkExistingLandlord(email, rut);
};
