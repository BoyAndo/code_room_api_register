// Tipos unificados para autenticación
import { StudentRegisterToken } from "../schemas/student.schema";
import { LandlordRegisterToken } from "../schemas/landlord.schema";

// Base type para datos comunes entre Student y Landlord
export interface BaseUser {
  id: number;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipo específico para Student desde la base de datos
export interface StudentFromDB extends BaseUser {
  studentRut: string;
  studentEmail: string;
  studentName: string;
  studentCollege: string;
  studentCertificateUrl: string;
  role: "student";
}

// Tipo específico para Landlord desde la base de datos
export interface LandlordFromDB extends BaseUser {
  landlordRut: string;
  landlordEmail: string;
  landlordName: string;
  landlordCarnetUrl: string;
  role: "landlord";
}

// Union type para usuarios autenticados
export type AuthenticatedUser = StudentFromDB | LandlordFromDB;

// Type guards para verificar el tipo de usuario
export function isStudentUser(user: AuthenticatedUser): user is StudentFromDB {
  return user.role === "student";
}

export function isLandlordUser(
  user: AuthenticatedUser
): user is LandlordFromDB {
  return user.role === "landlord";
}

// Tipos para tokens específicos
export type StudentTokenPayload = StudentRegisterToken;

// Extender LandlordRegisterToken para incluir landlordCarnetUrl
export type LandlordTokenPayload = LandlordRegisterToken & {
  landlordCarnetUrl: string;
};

// Union type para payloads de tokens
export type TokenPayload = StudentTokenPayload | LandlordTokenPayload;

// Respuesta estándar del login
export interface LoginResponse {
  success: boolean;
  token: string;
}

// Tipo para determinar el tipo de usuario encontrado
export type UserType = "student" | "landlord";
