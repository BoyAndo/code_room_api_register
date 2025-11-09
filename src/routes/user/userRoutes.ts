// src/routes/user/userRoutes.ts (¡En tu proyecto api_register!)

import express from "express";
import { getAllStudents } from "../../controllers/studentController";
import {
  verifyToken,
  requireLandlord,
} from "../../middlewares/auth.middleware";
// 🚨 1. Importa el controlador de resolución de nombres
import { resolveNames } from "../../controllers/DataController";

const router = express.Router();

// Ruta existente: Obtener todos los estudiantes
router.get("/student", verifyToken, requireLandlord, getAllStudents);

// 🚨 2. AÑADIR LA NUEVA RUTA PARA EL CHAT
// El proxy de Next.js llama a esta ruta sin prefijo, por lo que usamos la raíz ('/')
// La ruta completa será: POST http://localhost:3001/user/resolve-names
router.post("/resolve-names", resolveNames);

export default router;
