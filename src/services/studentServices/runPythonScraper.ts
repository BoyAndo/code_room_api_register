import { parseStudentInfo } from "./parseStudentInfo";

interface ScrapingResponse {
  success: boolean;
  data?: string;
  error?: string;
  session_id?: string;
}

/**
 * Ejecuta el scraping usando el microservicio Python containerizado
 * @param url Enlace obtenido del código QR
 * @returns Objeto con los datos del estudiante
 */
export const runPythonScraper = async (url: string): Promise<any> => {
  const PYTHON_SERVICE_URL =
    process.env.PYTHON_SERVICE_URL || "http://localhost:8002";

  console.log(
    `🔗 Making request to Python scraper service: ${PYTHON_SERVICE_URL}/scrape`
  );
  console.log(`📄 URL to process: ${url}`);

  try {
    const response = await fetch(`${PYTHON_SERVICE_URL}/scrape`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
      // Timeout de 2 minutos para CAPTCHA complejos
      signal: AbortSignal.timeout(120000),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    const result: ScrapingResponse = await response.json();

    console.log(`🐍 Python service response:`, {
      success: result.success,
      session_id: result.session_id,
      hasData: !!result.data,
      errorMessage: result.error,
    });

    if (!result.success) {
      throw new Error(`Scraping failed: ${result.error}`);
    }

    if (!result.data) {
      throw new Error("No data received from scraping service");
    }

    // Parsear los datos usando nuestro parser existente
    console.log("📄 Parsing extracted certificate data...");
    const parsed = parseStudentInfo(result.data);

    console.log("✅ Certificate data parsed successfully");
    return parsed;
  } catch (error) {
    console.error("❌ Error communicating with Python scraper service:", error);

    // Crear un error más descriptivo
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        `No se pudo conectar al servicio de scraping. Asegúrate de que el servicio Python esté corriendo en ${PYTHON_SERVICE_URL}`
      );
    }

    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(
        "El scraping tardó demasiado tiempo (timeout). Intenta nuevamente."
      );
    }

    // Re-throw el error original si es un error de negocio
    throw error;
  }
};
