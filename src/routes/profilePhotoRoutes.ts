import express from "express";
import { uploadStudentPhoto, uploadLandlordPhoto } from "../controllers/profilePhotoController";
import { upload } from "../middlewares/multer";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

// Ruta para subir foto de perfil de estudiante
router.post(
    "/student/photo",
    verifyToken,
    upload.single("photo"),
    uploadStudentPhoto
);

// Ruta para subir foto de perfil de propietario
router.post(
    "/landlord/photo",
    verifyToken,
    upload.single("photo"),
    uploadLandlordPhoto
);

export default router;