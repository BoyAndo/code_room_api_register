import { readIdFromImage } from "./readIdFromImage";
import { runIdScraper } from "./runIdScraper";

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

    // Si no se pueden extraer datos directamente, usar scraping
    if (!idInfo || !idInfo.rut) {
      console.log("🔄 Intentando extracción alternativa...");
      return await runIdScraper(imageBuffer);
    }

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
