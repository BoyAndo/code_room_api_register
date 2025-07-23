import { parseStudentInfo } from "./parseStudentInfo";
import { spawn } from "child_process";
import path from "path";

/**
 * Ejecuta el script Python pasándole una URL, y retorna los datos extraídos (como JSON)
 * @param url Enlace obtenido del código QR
 * @returns Objeto con los datos del estudiante
 */
export const runPythonScraper = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, "../../python/scrap.py");

    const process = spawn(
      "/home/ando-server/Escritorio/back_auth_code_room/venv/bin/python",
      [scriptPath, url]
    );

    let output = "";
    let errorOutput = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    process.on("close", (code) => {
      if (code !== 0) {
        console.error("Python script failed:", errorOutput);
        return reject(new Error("Falló el scraping del certificado"));
      }
      try {
        const parsed = parseStudentInfo(output);
        resolve(parsed);
      } catch (err) {
        reject(new Error("Error al interpretar los datos del certificado"));
      }
    });
  });
};
