import { readIdFromImage } from "./readIdFromImage";

interface LandlordValidationResult {
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
 * Extrae información del carnet de identidad del arrendador usando comparación directa de texto
 * @param imageBuffer Buffer de la imagen del carnet
 * @param formData Datos del formulario del arrendador para validación directa
 * @returns Objeto con el resultado de validación simplificado
 */
export const extractLandlordInfo = async (
  imageBuffer: Buffer,
  formData: {
    landlordName: string;
    landlordRut: string;
  }
): Promise<LandlordValidationResult> => {
  console.log("🆔 Iniciando validación simplificada del carnet...");

  try {
    // Usar el método simplificado que compara directamente el texto
    console.log("🔍 Validando carnet contra datos del formulario...");
    const result = await readIdFromImage(imageBuffer, formData);

    console.log("📊 Resultado de validación:", {
      textoExtraido: result.rawText.length > 0 ? "✅ Sí" : "❌ No",
      rutEncontrado: result.matchDetails.rutFound ? "✅ Sí" : "❌ No",
      nombreEncontrado: result.matchDetails.nameFound ? "✅ Sí" : "❌ No",
      esValido: result.isValid ? "✅ Sí" : "❌ No",
      confianza: `${result.confidence}%`
    });

    return result;
  } catch (error) {
    console.error("❌ Error extrayendo información del carnet:", error);
    throw new Error(
      `Error procesando carnet: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};
