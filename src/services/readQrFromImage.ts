import { Jimp } from "jimp";
import jsQR from "jsqr";

/**
 * Lee un código QR desde una imagen PNG usando jsQR
 * @param imagePath Ruta absoluta a la imagen PNG generada desde el PDF
 * @returns Contenido del código QR (texto)
 */
export const readQrFromImage = async (imagePath: string): Promise<string> => {
  try {
    console.log("📱 Cargando imagen:", imagePath);

    // Cargar la imagen con Jimp
    const image = await Jimp.read(imagePath);
    console.log(
      "✅ Imagen cargada, dimensiones:",
      image.bitmap.width,
      "x",
      image.bitmap.height
    );

    // jsQR necesita los datos de imagen en formato RGBA como Uint8ClampedArray
    const imageData = {
      data: new Uint8ClampedArray(image.bitmap.data),
      width: image.bitmap.width,
      height: image.bitmap.height,
    };

    console.log("🔍 Decodificando QR con jsQR...");

    // Intentar decodificar el QR
    const qrResult = jsQR(imageData.data, imageData.width, imageData.height);

    if (!qrResult) {
      console.error("❌ No se encontró código QR en la imagen");
      throw new Error("No se encontró código QR en la imagen");
    }

    console.log("✅ QR leído exitosamente:", qrResult.data);
    return qrResult.data;
  } catch (error) {
    console.error("❌ Error leyendo QR:", error);
    throw error;
  }
};
