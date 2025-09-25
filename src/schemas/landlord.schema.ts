import { z } from "zod";

// Regex para validar RUT chileno (acepta formatos: 1.234.567-8, 12.345.678-9, 7.848.777-1, 15.222.746-2, etc.)
const rutRegex = /^(\d{1,2}\.?\d{3}\.?\d{3}-[\dkK])$/;

// Schema para validar los datos de registro del arrendador
export const landlordSchema = z.object({
  landlordRut: z
    .string()
    .min(1, "El RUT del arrendador es obligatorio")
    .regex(
      rutRegex,
      "Formato de RUT inválido. Debe ser como: 12.345.678-9 o 12.345.678-K"
    ),

  landlordEmail: z
    .string()
    .min(1, "El email del arrendador es obligatorio")
    .email("Formato de email inválido"),

  landlordName: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),

  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(128, "La contraseña no puede exceder 128 caracteres"),

  // Campos obligatorios de ubicación
  regionId: z
    .string()
    .min(1, "La región es requerida")
    .transform((val) => parseInt(val)),
  comunaId: z
    .string()
    .min(1, "La comuna es requerida")
    .transform((val) => parseInt(val)),
});

export type LandlordRegisterInput = z.infer<typeof landlordSchema>;

// Schema para el token JWT del arrendador
export const landlordTokenSchema = z.object({
  id: z.number(),
  landlordRut: z.string(),
  landlordEmail: z.string(),
  landlordName: z.string(),
  role: z.string(),
});

export type LandlordRegisterToken = z.infer<typeof landlordTokenSchema>;
