import { z } from "zod";

// Definimos el esquema de validación para el registro de usuarios desde el body request
export const userSchema = z.object({
  studentRut: z.string().min(1, "El rut es requerido"),
  studentEmail: z.string().email("El email no es válido"),
  studentName: z.string().min(1, "El nombre es requerido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  studentCollege: z.string().min(1, "Tu casa de estudios es requerida"),
});

//Esto genera automáticamente el tipo User en typescript
export type UserRegisterInput = z.infer<typeof userSchema>;

// Definimos el esquema de validación para la información del certificado
export type UserCert = {
  studentName: string;
  studentRut: string;
  studentCollege: string;
  studentCertDate: string;
};

// Definimos el tipo FinalUser que extiende UserRegisterInput y agrega el campo role para registrar el usuario estudiante
export type FinalUser = UserRegisterInput & {
  role: string;
};

export type UserRegisterToken = {
  id: number;
  studentRut: string;
  studentEmail: string;
  studentName: string;
  studentCollege: string;
  studentCertificateUrl: string;
  role: string;
};
