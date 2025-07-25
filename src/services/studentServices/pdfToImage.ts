import pdfPoppler from "pdf-poppler";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";

export async function convertPdfToImage(buffer: Buffer): Promise<string> {
  // Usar directorio temporal del sistema
  const tempDir = os.tmpdir();
  const uniqueDir = path.join(tempDir, "pdf-to-image", uuidv4());

  await fs.mkdir(uniqueDir, { recursive: true });

  // Crear archivo temporal del PDF
  const pdfPath = path.join(uniqueDir, "temp.pdf");
  await fs.writeFile(pdfPath, buffer);

  try {
    // Configuración para pdf-poppler con MÁXIMA CALIDAD
    const options = {
      format: "png",
      out_dir: uniqueDir,
      out_prefix: "page",
      page: 1, // Solo la primera página

      // CONFIGURACIÓN DE ALTA RESOLUCIÓN
      density: 600, // DPI muy alto (300 -> 600)
      size: 4000, // Tamaño muy grande (2000 -> 4000)
      quality: 100, // Calidad máxima

      // Opciones adicionales para mejor calidad
      antialias: true, // Anti-aliasing habilitado
      single_file: true, // Un solo archivo
      print_mode: "png", // Modo de impresión PNG
    };

    console.log("🖼️  Convirtiendo PDF con configuración de máxima calidad:", {
      density: options.density,
      size: options.size,
      quality: options.quality,
    });

    // Convertir PDF a imagen
    const result = await pdfPoppler.convert(pdfPath, options);

    // El archivo generado tendrá el nombre 'page-1.png'
    const imagePath = path.join(uniqueDir, "page-1.png");

    // Verificar que el archivo existe
    const exists = await fs
      .access(imagePath)
      .then(() => true)
      .catch(() => false);
    if (!exists) {
      throw new Error("Failed to convert PDF to image: image file not created");
    }

    return imagePath;
  } catch (error) {
    console.error("Error en conversión PDF:", error);
    throw new Error(
      `Failed to convert PDF to image: ${(error as Error).message}`
    );
  } finally {
    // Solo limpiar el archivo PDF temporal (no la carpeta ni la imagen)
    try {
      await fs.unlink(pdfPath);
      console.log("🗑️  PDF temporal eliminado:", pdfPath);
    } catch (err) {
      console.warn("⚠️  No se pudo eliminar PDF temporal:", err);
    }
  }
}
