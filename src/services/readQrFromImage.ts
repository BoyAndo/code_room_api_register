import * as Jimp from "jimp";

// @ts-ignore
import QrCode from "qrcode-reader";

/**
 * Lee un código QR desde una imagen PNG y retorna su contenido (ej: URL)
 * @param imagePath Ruta absoluta a la imagen PNG generada desde el PDF
 * @returns Contenido del código QR (texto)
 */
export const readQrFromImage = (imagePath: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const image = await (Jimp as any).read(imagePath);

      const qr = new QrCode();

      qr.callback = function (err: any, value: { result: string }) {
        if (err || !value?.result) {
          return reject(new Error("No se pudo leer el código QR"));
        }

        resolve(value.result);
      };

      qr.decode(image.bitmap);
    } catch (err) {
      reject(err);
    }
  });
};
