import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Express } from "express";

const AWS_REGION = process.env.AWS_REGION!;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID!;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY!;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME!;
const AWS_BUCKET_URL = process.env.AWS_BUCKET_URL!;

const s3 = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
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
        Bucket: AWS_BUCKET_NAME,
        Key: uniqueName,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
    );

    const url = `${AWS_BUCKET_URL}${uniqueName}`;
    return url;
  } catch (err) {
    console.error("Error al subir a S3:", err);
    throw new Error(
      "Error subiendo el PDF al bucket: " + (err as Error).message
    );
  }
};
