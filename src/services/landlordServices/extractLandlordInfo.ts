import { readIdFromImage } from "./readIdFromImage";

/**
 * Extrae información del carnet de identidad del arrendador
 * @param imageBuffer Buffer de la imagen del carnet
 * @returns Objeto con los datos extraídos del carnet
 */
export const extractLandlordInfo = async (
  imageBuffer: Buffer
): Promise<any> => {
  console.log("🆔 Iniciando extracción de información del carnet...");

  try {
    // Paso 1: Intentar leer datos directamente de la imagen
    console.log("🔍 Leyendo información del carnet...");
    const idInfo = await readIdFromImage(imageBuffer);

    console.log("✅ Información del carnet extraída exitosamente");
    return idInfo;
  } catch (error) {
    console.error("❌ Error extrayendo información del carnet:", error);
    throw new Error(
      `Error procesando carnet: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};
