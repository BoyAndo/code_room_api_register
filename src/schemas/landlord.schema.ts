import { z } from "zod";

// Schema para validar los datos de registro del arrendador
export const landlordSchema = z.object({
  landlordRut: z
    .string()
    .min(1, "El RUT del arrendador es obligatorio")
    .regex(
      /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/,
      "Formato de RUT inválido (ej: 12.345.678-9)"
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
