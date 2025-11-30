import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT!;
const MINIO_PORT = process.env.MINIO_PORT!;
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY!;
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY!;
const MINIO_USE_SSL = process.env.MINIO_USE_SSL === "true";
const MINIO_PUBLIC_URL = process.env.MINIO_PUBLIC_URL!;

const protocol = MINIO_USE_SSL ? "https" : "http";
const s3Client = new S3Client({
    region: "us-east-1",
    endpoint: `${protocol}://${MINIO_ENDPOINT}:${MINIO_PORT}`,
    credentials: {
        accessKeyId: MINIO_ACCESS_KEY,
        secretAccessKey: MINIO_SECRET_KEY,
    },
    forcePathStyle: true,
});

const BUCKET_NAME = "profilephotos";

export const uploadProfilePhoto = async (file: Express.Multer.File, userId: string) => {
    try {
        // ⚠️ Asumimos que el bucket 'profilephotos' ya existe
        // No verificamos su existencia para evitar problemas con HTTPS proxy
        
        const extension = file.originalname.split(".").pop();
        const fileName = `${userId}-${uuidv4()}.${extension}`;
        
        // Usar S3 SDK para subir el archivo
        await s3Client.send(
            new PutObjectCommand({
                Bucket: BUCKET_NAME,
                Key: fileName,
                Body: file.buffer,
                ContentType: file.mimetype,
            })
        );

        // ✅ Generar URL pública con HTTPS
        return `${MINIO_PUBLIC_URL}/${BUCKET_NAME}/${fileName}`;
    } catch (error) {
        console.error("Error uploading profile photo to MinIO:", error);
        throw error;
    }
};