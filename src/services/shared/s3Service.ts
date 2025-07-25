import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT!;
const MINIO_USER = process.env.MINIO_USER!;
const MINIO_PASS = process.env.MINIO_PASS!;
const URL_S3 = process.env.URL_S3!;
const URL_S3_CARNETS = process.env.URL_S3_CARNETS!;

const s3 = new S3Client({
  region: "us-east-1",
  endpoint: MINIO_ENDPOINT,
  credentials: {
    accessKeyId: MINIO_USER,
    secretAccessKey: MINIO_PASS,
  },
  forcePathStyle: true,
});

/**
 * Sube un archivo PDF a MinIO/S3 desde memoria (buffer)
 * @param file El archivo PDF recibido por multer
 * @returns URL pública del archivo subido
 */
export const uploadPdfToBucket = async (
  file: Express.Multer.File
): Promise<string> => {
  const uniqueName = `${Date.now()}-${file.originalname}`;

  try {
    await s3.send(
      new PutObjectCommand({
        Bucket: "certificados",
        Key: uniqueName,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
    );

    const url = `${URL_S3}${uniqueName}`;
    return url;
  } catch (err) {
    console.error("Error al subir a S3:", err);
    throw new Error(
      "Error subiendo el PDF al bucket: " + (err as Error).message
    );
  }
};

/**
 * Sube una imagen a MinIO/S3 desde un buffer
 * @param buffer Buffer de la imagen
 * @param filename Nombre del archivo
 * @returns URL pública del archivo subido
 */
export const uploadImageToBucket = async (
  buffer: Buffer,
  filename: string
): Promise<string> => {
  const uniqueName = `carnet-${Date.now()}-${filename}`;

  try {
    await s3.send(
      new PutObjectCommand({
        Bucket: "carnets",
        Key: uniqueName,
        Body: buffer,
        ContentType: "image/jpeg", // Asumimos JPEG por defecto
      })
    );

    const url = `${URL_S3_CARNETS}${uniqueName}`;
    return url;
  } catch (err) {
    console.error("Error al subir imagen a S3:", err);
    throw new Error(
      "Error subiendo la imagen al bucket: " + (err as Error).message
    );
  }
};
