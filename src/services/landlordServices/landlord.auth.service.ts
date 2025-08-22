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

// Función para generar token JWT para arrendador usando HMAC
export const generateLandlordToken = (
  landlord: LandlordRegisterToken
): string => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error(
      "JWT_SECRET no está configurado en las variables de entorno"
    );
  }

  const payload = {
    id: landlord.id,
    landlordRut: landlord.landlordRut,
    landlordEmail: landlord.landlordEmail,
    landlordName: landlord.landlordName,
    role: landlord.role,
  };

  return jwt.sign(payload, JWT_SECRET!, {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRES_IN || "24h",
  } as jwt.SignOptions);
};

// Función para verificar si ya existe un arrendador
export const checkExistingLandlord = async (email: string, rut: string) => {
  return await LandlordModel.checkExistingLandlord(email, rut);
};
