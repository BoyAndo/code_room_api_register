import { convertPdfToImage } from "./pdfToImage";
import { readQrFromImage } from "./readQrFromImage";
import { runPythonScraper } from "./runPythonScraper";
import fs from "fs/promises";

/**
 * Flujo completo: PDF (Buffer) → Imagen → QR → Python → Datos
 * @param buffer Archivo PDF recibido desde el frontend
 * @returns Datos reales extraídos desde la institución (nombre, RUT, carrera)
 */
export const extractStudentInfo = async (
  buffer: Buffer
): Promise<{
  studentName: string;
  studentRut: string;
  studentCareer?: string;
}> => {
  // Paso 1: Convertir el PDF en imagen temporal
  const imagePath = await convertPdfToImage(buffer);

  try {
    // Paso 2: Leer QR desde imagen
    const urlDesdeQr = await readQrFromImage(imagePath);

    // Paso 3: Ejecutar scraping Python con la URL
    const datos = await runPythonScraper(urlDesdeQr);

    // Paso 4: Devolver datos del estudiante
    return {
      studentName: datos.studentName,
      studentRut: datos.studentRut,
      studentCareer: datos.studentCareer, // opcional
    };
  } finally {
    // Limpieza: eliminar imagen temporal
    try {
      await fs.unlink(imagePath);
    } catch (err) {
      console.warn("No se pudo eliminar la imagen temporal:", err);
    }
  }
};
