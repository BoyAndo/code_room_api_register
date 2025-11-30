import { Client } from "minio";
import { v4 as uuidv4 } from "uuid";
import { Readable } from "stream";

const minioClient = new Client({
    endPoint: process.env.MINIO_ENDPOINT || "localhost",
    port: parseInt(process.env.MINIO_PORT || "9000"),
    useSSL: process.env.MINIO_USE_SSL === "true",
    accessKey: process.env.MINIO_ACCESS_KEY || "minioadmin",
    secretKey: process.env.MINIO_SECRET_KEY || "minioadmin123",
    region: "us-east-1" // Agregar región por defecto
});

const BUCKET_NAME = "profilephotos";

export const uploadProfilePhoto = async (file: Express.Multer.File, userId: string) => {
    try {
        // ⚠️ Asumimos que el bucket 'profilephotos' ya existe
        // No verificamos su existencia para evitar problemas con HTTPS proxy
        
        const extension = file.originalname.split(".").pop();
        const fileName = `${userId}-${uuidv4()}.${extension}`;
        
        const metaData = {
            "Content-Type": file.mimetype,
        };

        // Usar putObject con buffer directamente
        await minioClient.putObject(
            BUCKET_NAME, 
            fileName, 
            file.buffer, 
            file.size, 
            metaData
        );

        // ✅ Usar URL pública con HTTPS si está configurada, sino usar la interna
        const publicUrl = process.env.MINIO_PUBLIC_URL;
        if (publicUrl) {
            return `${publicUrl}/${BUCKET_NAME}/${fileName}`;
        }
        
        // Fallback a URL interna (solo para desarrollo)
        const protocol = process.env.MINIO_USE_SSL === "true" ? "https" : "http";
        const baseUrl = `${protocol}://${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}`;
        return `${baseUrl}/${BUCKET_NAME}/${fileName}`;
    } catch (error) {
        console.error("Error uploading profile photo to MinIO:", error);
        throw error;
    }
};