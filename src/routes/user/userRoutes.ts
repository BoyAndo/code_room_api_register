import express from "express";
import { getAllStudents, deleteStudent } from "../../controllers/studentController";
import { deleteLandlord } from "../../controllers/landlordController";
import {
  verifyToken,
  requireLandlord,
  requireStudent,
} from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/student", verifyToken, requireLandlord, getAllStudents);

// Eliminar cuenta de estudiante (solo el mismo estudiante puede eliminarse)
router.delete("/student", verifyToken, requireStudent, deleteStudent);

// Eliminar cuenta de landlord (solo el mismo landlord puede eliminarse)
router.delete("/landlord", verifyToken, requireLandlord, deleteLandlord);

export default router;
