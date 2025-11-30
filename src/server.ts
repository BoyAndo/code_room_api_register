import app from "./app";
import { initializeBuckets } from "./services/shared/s3Service";

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    // ⚠️ Inicialización de buckets deshabilitada
    // Los buckets deben crearse manualmente en MinIO una vez
    // await initializeBuckets();
    
    console.log("⚠️ Bucket initialization skipped - ensure buckets exist in MinIO");

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
