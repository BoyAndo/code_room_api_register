import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT!;
const MINIO_PORT = process.env.MINIO_PORT!;
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY!;
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY!;
const MINIO_USE_SSL = process.env.MINIO_USE_SSL === "true";
const URL_S3_CERTIFICADOS = process.env.URL_S3_CERTIFICADOS!;
const URL_S3_CARNETS = process.env.URL_S3_CARNETS!;

const protocol = MINIO_USE_SSL ? "https" : "http";
const s3 = new S3Client({
  region: "us-east-1",
  endpoint: `${protocol}://${MINIO_ENDPOINT}:${MINIO_PORT}`,
  credentials: {
    accessKeyId: MINIO_ACCESS_KEY,
    secretAccessKey: MINIO_SECRET_KEY,
  },
  forcePathStyle: true,
});

// Importar los comandos necesarios para crear buckets
import { CreateBucketCommand, HeadBucketCommand } from "@aws-sdk/client-s3";

// Lista de buckets necesarios
const REQUIRED_BUCKETS = ["certificados", "carnets", "profilephotos"];

// Función para verificar si un bucket existe
const bucketExists = async (bucketName: string): Promise<boolean> => {
  try {
    await s3.send(new HeadBucketCommand({ Bucket: bucketName }));
    return true;
  } catch (error) {
    return false;
  }
};

// Función para crear un bucket si no existe
const createBucketIfNotExists = async (bucketName: string): Promise<void> => {
  try {
    const exists = await bucketExists(bucketName);
    if (!exists) {
      console.log(`Creando bucket: ${bucketName}`);
      await s3.send(new CreateBucketCommand({ Bucket: bucketName }));
      console.log(`Bucket ${bucketName} creado exitosamente`);
    } else {
      console.log(`Bucket ${bucketName} ya existe`);
    }
  } catch (error) {
    console.error(`Error al crear bucket ${bucketName}:`, error);
    throw error;
  }
};

// Función para inicializar todos los buckets necesarios
export const initializeBuckets = async (): Promise<void> => {
  console.log("Inicializando buckets de MinIO...");
  for (const bucket of REQUIRED_BUCKETS) {
    await createBucketIfNotExists(bucket);
  }
  console.log("Inicialización de buckets completada");
};

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

    const url = `${URL_S3_CERTIFICADOS}${uniqueName}`;
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
        ContentType: "image/jpeg",
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
