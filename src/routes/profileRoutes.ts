import express from "express";
import multer from "multer";
import { uploadStudentPhoto, uploadLandlordPhoto } from "../controllers/profilePhotoController";
import { verifyToken, requireStudent, requireLandlord } from "../middlewares/authMiddleware";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Rutas para estudiantes
router.post(
  "/student/photo",
  verifyToken,
  requireStudent,
  upload.single("photo"),
  uploadStudentPhoto
);

// Rutas para propietarios
router.post(
  "/landlord/photo",
  verifyToken,
  requireLandlord,
  upload.single("photo"),
  uploadLandlordPhoto
);

export default router;