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

/**
 * @swagger
 * /user/student:
 *   get:
 *     tags: [Students]
 *     summary: Obtener todos los estudiantes
 *     description: Devuelve la lista completa de estudiantes registrados (solo para landlords)
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       401:
 *         description: No autenticado
 *       403:
 *         description: No autorizado (solo landlords)
 */
router.get("/student", verifyToken, requireLandlord, getAllStudents);

/**
 * @swagger
 * /user/resolve-names:
 *   post:
 *     tags: [Students]
 *     summary: Resolver nombres de usuarios
 *     description: Convierte IDs de usuarios a sus nombres y roles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userIds]
 *             properties:
 *               userIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["1", "2", "3"]
 *     responses:
 *       200:
 *         description: Nombres resueltos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   role:
 *                     type: string
 */
router.post("/resolve-names", resolveNames);

export default router;
