import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import { execFile as execFileCb } from "child_process";
import { promisify } from "util";
const execFile = promisify(execFileCb);

export async function convertPdfToImage(buffer: Buffer): Promise<string> {
  // Usar directorio temporal del sistema
  const tempDir = os.tmpdir();
  const uniqueDir = path.join(tempDir, "pdf-to-image", uuidv4());

  await fs.mkdir(uniqueDir, { recursive: true });

  // Crear archivo temporal del PDF
  const pdfPath = path.join(uniqueDir, "temp.pdf");
  await fs.writeFile(pdfPath, buffer);

  try {
    // Configuración para conversión con MÁXIMA CALIDAD
    const options: any = {
      format: "png",
      out_dir: uniqueDir,
      out_prefix: "page",
      page: 1, // Solo la primera página
      density: 600, // DPI
      size: 4000,
      quality: 100,
      antialias: true,
      single_file: true,
    };

    console.log("🖼️  Convirtiendo PDF con configuración de máxima calidad:", {
      density: options.density,
      size: options.size,
      quality: options.quality,
    });

    // Si estamos en Linux, evitar importar pdf-poppler (que falla en linux)
    if (process.platform === "linux") {
      // Usar pdftocairo (parte de poppler) instalado en el sistema
      const args: string[] = [];
      // formato
      if (options.format === "png") args.push("-png");
      else if (options.format === "jpg" || options.format === "jpeg")
        args.push("-jpeg");

      if (options.single_file) args.push("-singlefile");
      if (options.density) args.push("-r", String(options.density));

      // convertir solo la página solicitada
      if (options.page) {
        args.push("-f", String(options.page));
        args.push("-l", String(options.page));
      }

      const outPrefix = path.join(options.out_dir, options.out_prefix);

      try {
        // Ejecutar pdftocairo <args> <input.pdf> <outPrefix>
        await execFile("pdftocairo", [...args, pdfPath, outPrefix], {
          encoding: "utf8",
          maxBuffer: 10 * 1024 * 1024,
        } as any);
      } catch (e: any) {
        // Si no existe el binario o falla, informar guía clara
        if (e.code === "ENOENT") {
          console.error(
            "pdftocairo no encontrado en el sistema. Instale 'poppler' (ej: sudo pacman -S poppler) y vuelva a intentarlo."
          );
          throw new Error(
            "pdftocairo not found: please install poppler on your system"
          );
        }
        console.error("Error ejecutando pdftocairo:", e);
        throw e;
      }

      // Buscar el archivo generado (pdftocairo puede producir 'page.png' o 'page-1.png')
      const entries = await fs.readdir(uniqueDir);
      const match = entries.find(
        (f) =>
          f.startsWith(options.out_prefix) &&
          (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg"))
      );
      if (!match)
        throw new Error(
          "Failed to convert PDF to image: image file not created"
        );

      return path.join(uniqueDir, match);
    }

    // En macOS/Windows cargamos dinámicamente la dependencia "pdf-poppler"
    const pdfPoppler = (await import("pdf-poppler")) as any;
    await pdfPoppler.convert(pdfPath, options);

    // pdf-poppler suele generar 'page-1.png' cuando single_file es true
    const possibleNames = ["page-1.png", "page.png", "page.png"];
    let imagePath: string | null = null;
    for (const n of possibleNames) {
      const p = path.join(uniqueDir, n);
      const exists = await fs
        .access(p)
        .then(() => true)
        .catch(() => false);
      if (exists) {
        imagePath = p;
        break;
      }
    }
    if (!imagePath)
      throw new Error("Failed to convert PDF to image: image file not created");

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
