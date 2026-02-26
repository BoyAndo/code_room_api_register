import express from "express";
import multer from "multer";
import {
  uploadStudentPhoto,
  uploadLandlordPhoto,
} from "../../controllers/profilePhotoController";
import {
  verifyToken,
  requireStudent,
  requireLandlord,
} from "../../middlewares/auth.middleware";

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

/**
 * @swagger
 * /profile/student/photo:
 *   post:
 *     tags: [Profile]
 *     summary: Subir foto de perfil de estudiante
 *     description: Permite a un estudiante autenticado subir o actualizar su foto de perfil
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [photo]
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Imagen de perfil (jpg, jpeg, png, gif - máx. 5MB)
 *     responses:
 *       200:
 *         description: Foto subida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Foto de perfil subida exitosamente"
 *                 profilePhotoUrl:
 *                   type: string
 *                   example: "https://uroom-api-storage.gabogrobier.dev/profiles/student-123.jpg"
 *       400:
 *         description: No se proporcionó ninguna imagen
 *       401:
 *         description: No autenticado
 *       403:
 *         description: No autorizado (solo estudiantes)
 */
router.post(
  "/student/photo",
  verifyToken,
  requireStudent,
  upload.single("photo"),
  uploadStudentPhoto,
);

/**
 * @swagger
 * /profile/landlord/photo:
 *   post:
 *     tags: [Profile]
 *     summary: Subir foto de perfil de landlord
 *     description: Permite a un landlord autenticado subir o actualizar su foto de perfil
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [photo]
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Imagen de perfil (jpg, jpeg, png, gif - máx. 5MB)
 *     responses:
 *       200:
 *         description: Foto subida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Foto de perfil subida exitosamente"
 *                 profilePhotoUrl:
 *                   type: string
 *                   example: "https://uroom-api-storage.gabogrobier.dev/profiles/landlord-456.jpg"
 *       400:
 *         description: No se proporcionó ninguna imagen
 *       401:
 *         description: No autenticado
 *       403:
 *         description: No autorizado (solo landlords)
 */
router.post(
  "/landlord/photo",
  verifyToken,
  requireLandlord,
  upload.single("photo"),
  uploadLandlordPhoto,
);

export default router;
