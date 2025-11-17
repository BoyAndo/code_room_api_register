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
        // Verificar que el bucket existe, si no, crearlo
        const bucketExists = await minioClient.bucketExists(BUCKET_NAME);
        if (!bucketExists) {
            await minioClient.makeBucket(BUCKET_NAME, 'us-east-1');
            console.log(`Bucket ${BUCKET_NAME} creado exitosamente`);
        }

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

        const baseUrl = `http://${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}`;
        return `${baseUrl}/${BUCKET_NAME}/${fileName}`;
    } catch (error) {
        console.error("Error uploading profile photo to MinIO:", error);
        throw error;
    }
};