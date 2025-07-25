import { convertPdfToImage } from "./pdfToImage";
import { readQrFromImage } from "./readQrFromImage";
import { runPythonScraper } from "./runPythonScraper";
import fs from "fs/promises";
import path from "path";

/**
 * Flujo completo: PDF (Buffer) → Imagen → QR → Python → Datos
 * @param buffer Archivo PDF recibido desde el frontend
 * @returns Datos esenciales extraídos desde la institución
 */
export const extractStudentInfo = async (
  buffer: Buffer
): Promise<{
  studentName: string;
  studentRut: string;
  studentCollege: string;
  studentCertEmissionDate: string;
}> => {
  let imagePath: string | null = null;

  try {
    console.log("📄 Iniciando extracción de información del PDF...");

    // Paso 1: Convertir el PDF en imagen temporal
    console.log("🖼️  Convirtiendo PDF a imagen...");
    imagePath = await convertPdfToImage(buffer);
    console.log("✅ Imagen creada en:", imagePath);

    // Paso 2: Leer QR desde imagen
    console.log("📱 Leyendo código QR de la imagen...");
    const urlDesdeQr = await readQrFromImage(imagePath);
    console.log("✅ URL extraída del QR:", urlDesdeQr);

    // Paso 3: Ejecutar scraping Python con la URL
    console.log("🐍 Ejecutando scraping Python...");
    const datos = await runPythonScraper(urlDesdeQr);
    console.log("✅ Datos extraídos:", datos);

    // Paso 4: Devolver los datos esenciales del estudiante
    return {
      studentName: datos.studentName,
      studentRut: datos.studentRut,
      studentCollege: datos.studentCollege,
      studentCertEmissionDate: datos.studentCertEmissionDate,
    };
  } catch (error) {
    console.error("❌ Error en extractStudentInfo:", error);
    throw error;
  } finally {
    // Limpieza: eliminar toda la carpeta temporal (incluye imagen y PDF restante)
    if (imagePath) {
      try {
        // Obtener la carpeta padre de la imagen
        const tempDir = imagePath.split(path.sep).slice(0, -1).join(path.sep);
        await fs.rm(tempDir, { recursive: true, force: true });
        console.log("🧹 Carpeta temporal completa eliminada:", tempDir);
      } catch (err) {
        console.warn("⚠️  No se pudo eliminar carpeta temporal:", err);
      }
    }
  }
};
