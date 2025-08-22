import { z } from "zod";

// Regex para validar RUT chileno (acepta formatos: 1.234.567-8, 12.345.678-9, 7.848.777-1, 15.222.746-2, etc.)
const rutRegex = /^(\d{1,2}\.?\d{3}\.?\d{3}-[\dkK])$/;

// Definimos el esquema de validación para el registro de estudiantes desde el body request
export const studentSchema = z.object({
  studentRut: z
    .string()
    .min(1, "El RUT es requerido")
    .regex(rutRegex, "Formato de RUT inválido. Debe ser como: 12.345.678-9 o 12.345.678-K"),
  studentEmail: z.string().email("El email no es válido"),
  studentName: z.string().min(1, "El nombre es requerido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  studentCollege: z.string().min(1, "Tu casa de estudios es requerida"),
});

//Esto genera automáticamente el tipo Student en typescript
export type StudentRegisterInput = z.infer<typeof studentSchema>;

// Definimos el esquema de validación para la información del certificado
export type StudentCert = {
  studentName: string;
  studentRut: string;
  studentCollege: string;
  studentCertDate: string;
};

// Definimos el tipo FinalStudent que extiende StudentRegisterInput y agrega el campo role para registrar el usuario estudiante
export type FinalStudent = StudentRegisterInput & {
  role: string;
};

export interface StudentRegisterToken {
  id: number;
  studentRut: string;
  studentEmail: string;
  studentName: string;
  studentCollege: string; // ← Asegúrate de que esté
  studentCertificateUrl: string; // ← Y este también
  role: string;
}
