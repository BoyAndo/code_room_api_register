import { fromBuffer } from "pdf2pic";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

export async function convertPdfToImage(buffer: Buffer): Promise<string> {
  const outputDir = path.join(__dirname, "..", "temp", uuidv4());

  await fs.mkdir(outputDir, { recursive: true });

  const converter = fromBuffer(buffer, {
    density: 300,
    saveFilename: "page",
    savePath: "./src/temp",
    format: "png",
    width: 1000,
    height: 1400,
    quality: 75,
  });

  const result = await converter(1); // convierte la página 1

  if (!result.path) {
    throw new Error(
      "Failed to convert PDF to image: result path is undefined."
    );
  }

  return result.path;
}
