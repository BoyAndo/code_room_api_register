import Tesseract from "tesseract.js";
import sharp from "sharp";
import { normalize } from "../shared/normalize";

interface SimpleIdCardResult {
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
 * Preprocesa la imagen para mejorar la precisión del OCR
 * @param imageBuffer Buffer de la imagen original
 * @returns Buffer de la imagen procesada
 */
export const preprocessImage = async (imageBuffer: Buffer): Promise<Buffer> => {
  try {
    console.log("🔧 Preprocesando imagen para OCR...");

    const processedBuffer = await sharp(imageBuffer)
      .greyscale() // Convertir a escala de grises
      .normalize() // Normalizar contraste
      .sharpen() // Aumentar nitidez
      .resize({
        width: 1200,
        height: 800,
        fit: "inside",
        withoutEnlargement: false,
      }) // Redimensionar manteniendo proporción
      .jpeg({ quality: 95 }) // Guardar en alta calidad
      .toBuffer();

    console.log("✅ Imagen preprocesada correctamente");
    return processedBuffer;
  } catch (error) {
    console.error("❌ Error preprocesando imagen:", error);
    throw new Error(
      `Error preprocesando imagen: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};

/**
 * Extrae texto completo de la imagen usando Tesseract OCR
 * @param imageBuffer Buffer de la imagen
 * @returns Texto extraído de la imagen
 */
export const extractTextFromImage = async (
  imageBuffer: Buffer
): Promise<string> => {
  try {
    console.log("📝 Iniciando extracción de texto con Tesseract...");

    let ocrStarted = false;
    const {
      data: { text, confidence },
    } = await Tesseract.recognize(
      imageBuffer,
      "spa", // Idioma español
      {
        logger: (m) => {
          if (m.status === "recognizing text" && !ocrStarted) {
            console.log("🔍 Escaneando documento...");
            ocrStarted = true;
          }
        },
      }
    );

    console.log(`✅ Escaneado completado con confianza: ${confidence}%`);
    console.log("📄 Texto completo extraído:");
    console.log("---START TEXT---");
    console.log(text);
    console.log("---END TEXT---");

    return text;
  } catch (error) {
    console.error("❌ Error en OCR:", error);
    throw new Error(
      `Error extrayendo texto: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};

/**
 * Busca si un RUT está presente en el texto (múltiples formatos)
 * @param text Texto donde buscar
 * @param targetRut RUT a buscar
 * @returns true si encuentra coincidencia
 */
function findRutInText(
  text: string,
  targetRut: string
): { found: boolean; match?: string } {
  const normalizedText = normalize(text);
  const normalizedTarget = normalize(targetRut);

  // Remover todos los puntos y guiones para comparación base
  const cleanTarget = normalizedTarget.replace(/[.\-]/g, "");
  const cleanText = normalizedText.replace(/[.\-]/g, "");

  // Buscar el RUT sin formato en el texto
  if (cleanText.includes(cleanTarget)) {
    return { found: true, match: cleanTarget };
  }

  // También buscar con formato original
  if (normalizedText.includes(normalizedTarget)) {
    return { found: true, match: normalizedTarget };
  }

  return { found: false };
}

/**
 * Busca si un nombre está presente en el texto
 * @param text Texto donde buscar
 * @param targetName Nombre a buscar
 * @returns true si encuentra coincidencia suficiente
 */
function findNameInText(
  text: string,
  targetName: string
): { found: boolean; match?: string } {
  const normalizedText = normalize(text);
  const normalizedTarget = normalize(targetName);

  // Dividir el nombre en palabras
  const nameWords = normalizedTarget
    .split(" ")
    .filter((word) => word.length > 2);

  if (nameWords.length === 0) return { found: false };

  // Contar cuántas palabras del nombre se encuentran en el texto
  const foundWords = nameWords.filter((word) => normalizedText.includes(word));
  const matchPercentage = foundWords.length / nameWords.length;

  console.log(`📊 Búsqueda nombre "${targetName}":`, {
    palabrasTotal: nameWords.length,
    palabrasEncontradas: foundWords.length,
    porcentaje: Math.round(matchPercentage * 100) + "%",
    palabrasCoincidentes: foundWords,
  });

  // Considerar válido si al menos el 70% de las palabras coinciden
  if (matchPercentage >= 0.7) {
    return { found: true, match: foundWords.join(" ") };
  }

  return { found: false };
}

/**
 * Función principal simplificada para validar carnet
 * @param imageBuffer Buffer de la imagen del carnet
 * @param formData Datos del formulario para comparar
 * @returns Resultado de validación simple
 */
export const validateIdCardSimple = async (
  imageBuffer: Buffer,
  formData: {
    landlordName: string;
    landlordRut: string;
  }
): Promise<SimpleIdCardResult> => {
  try {
    console.log("🆔 Iniciando validación simplificada del carnet...");
    console.log("📋 Datos a validar:", formData);

    // Paso 1: Preprocesar imagen
    const processedImage = await preprocessImage(imageBuffer);

    // Paso 2: Extraer texto completo
    const rawText = await extractTextFromImage(processedImage);

    if (!rawText || rawText.trim().length === 0) {
      throw new Error("No se pudo extraer texto de la imagen");
    }

    // Paso 3: Buscar RUT en el texto
    console.log("🔍 Buscando RUT en el texto...");
    const rutResult = findRutInText(rawText, formData.landlordRut);

    // Paso 4: Buscar nombre en el texto
    console.log("🔍 Buscando nombre en el texto...");
    const nameResult = findNameInText(rawText, formData.landlordName);

    // Paso 5: Calcular confianza
    let confidence = 20; // Base
    if (rutResult.found) confidence += 50; // RUT es crítico
    if (nameResult.found) confidence += 30; // Nombre importante

    const isValid = rutResult.found && nameResult.found;

    const result: SimpleIdCardResult = {
      rawText,
      isValid,
      confidence: Math.min(confidence, 100),
      matchDetails: {
        nameFound: nameResult.found,
        rutFound: rutResult.found,
        nameMatch: nameResult.match,
        rutMatch: rutResult.match,
      },
    };

    console.log("📊 Resultado de validación simplificada:", {
      rutEncontrado: rutResult.found,
      nombreEncontrado: nameResult.found,
      esValido: isValid,
      confianza: `${result.confidence}%`,
    });

    return result;
  } catch (error) {
    console.error("❌ Error en validación simplificada:", error);
    throw new Error(
      `Error procesando carnet: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};
