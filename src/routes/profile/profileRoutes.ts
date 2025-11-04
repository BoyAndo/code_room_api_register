import express from "express";
import multer from "multer";
import { uploadStudentPhoto, uploadLandlordPhoto } from "../../controllers/profilePhotoController";
import { verifyToken, requireStudent, requireLandlord } from "../../middlewares/auth.middleware";

const router = express.Router();

// Configuración de Multer para manejar la subida de archivos
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB tamaño máximo
  },
  fileFilter: (_req, file, cb) => {
    // Validar tipos de archivo permitidos
    if (!file.mimetype.match(/^image\/(jpg|jpeg|png|gif)$/)) {
      cb(new Error("Solo se permiten imágenes (jpg, jpeg, png, gif)"));
      return;
    }
    cb(null, true);
  },
});

// Ruta para subir foto de perfil de estudiante
router.post(
  "/student/photo",
  verifyToken,
  requireStudent,
  upload.single("photo"),
  uploadStudentPhoto
);

// Ruta para subir foto de perfil de propietario
router.post(
  "/landlord/photo",
  verifyToken,
  requireLandlord,
  upload.single("photo"),
  uploadLandlordPhoto
);

export default router;