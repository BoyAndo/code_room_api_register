import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT!;
const MINIO_USER = process.env.MINIO_USER!;
const MINIO_PASS = process.env.MINIO_PASS!;
const URL_S3 = process.env.URL_S3!;

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
