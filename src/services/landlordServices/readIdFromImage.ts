import { validateIdCardSimple } from "./simpleOcrService";

interface LandlordIdInfo {
  rawText: string;
  isValid: boolean;
  confidence: number;
  matchDetails: {
    nameFound: boolean;
    rutFound: boolean;
    nameMatch?: string;
    rutMatch?: string;
  };
}

/**
 * Lee información específica del carnet de identidad desde una imagen usando método simplificado
 * @param imageBuffer Buffer de la imagen del carnet
 * @param formData Datos del formulario para validación directa
 * @returns Objeto con la información extraída y validada del carnet
 */
export const readIdFromImage = async (
  imageBuffer: Buffer,
  formData: {
    landlordName: string;
    landlordRut: string;
  }
): Promise<LandlordIdInfo> => {
  console.log("🆔 Analizando carnet de identidad con método simplificado...");

  try {
    // Usar el servicio simplificado que compara directamente con el texto extraído
    const result = await validateIdCardSimple(imageBuffer, formData);

    if (!result.isValid) {
      const errors = [];
      if (!result.matchDetails.rutFound)
        errors.push("RUT no encontrado en el carnet");
      if (!result.matchDetails.nameFound)
        errors.push("Nombre no encontrado en el carnet");

      throw new Error(`Validación fallida: ${errors.join(", ")}`);
    }

    if (result.confidence < 50) {
      console.warn(`⚠️ Confianza baja en la validación: ${result.confidence}%`);
    }

    console.log("✅ Carnet validado exitosamente:", {
      rutEncontrado: result.matchDetails.rutFound,
      nombreEncontrado: result.matchDetails.nameFound,
      confianza: `${result.confidence}%`,
    });

    return result;
  } catch (error) {
    console.error("❌ Error validando carnet:", error);
    throw new Error(
      `Error procesando carnet: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};
