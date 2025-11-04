import app from "./app";
import { initializeBuckets } from "./services/shared/s3Service";

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    // Inicializar buckets de MinIO
    await initializeBuckets();

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
