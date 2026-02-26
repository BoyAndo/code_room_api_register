import express from "express";
import { registerStudent } from "../../controllers/studentController";
import { registerLandlord } from "../../controllers/landlordController";
import { loginController } from "../../controllers/loginController";
import {
  getMeController,
  logoutController,
  refreshTokenController,
} from "../../controllers/authController";
import { upload } from "../../middlewares/multer";
import { getLandlords } from "../../controllers/landlordController";
import { verifyToken } from "../../middlewares/auth.middleware";

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: Iniciar sesión
 *     description: Autentica un usuario (estudiante o landlord) y devuelve un token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               example: accessToken=eyJhbGc...; HttpOnly; Secure; SameSite=None
 *       401:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/login", loginController);

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     tags: [Authentication]
 *     summary: Refrescar token de acceso
 *     description: Genera un nuevo access token usando el refresh token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [refreshToken]
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Refresh token válido
 *     responses:
 *       200:
 *         description: Token refrescado exitosamente
 *       401:
 *         description: Refresh token inválido o expirado
 */
router.post("/refresh", refreshTokenController);

/**
 * @swagger
 * /auth/me:
 *   get:
 *     tags: [Authentication]
 *     summary: Obtener información del usuario autenticado
 *     description: Devuelve los datos del usuario actualmente autenticado
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/Student'
 *                 - $ref: '#/components/schemas/Landlord'
 *       401:
 *         description: No autenticado
 */
router.get("/me", verifyToken, getMeController);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: [Authentication]
 *     summary: Cerrar sesión
 *     description: Invalida el refresh token y cierra la sesión del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [refreshToken]
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 *       500:
 *         description: Error al cerrar sesión
 */
router.post("/logout", logoutController);

/**
 * @swagger
 * /auth/students-register:
 *   post:
 *     tags: [Students]
 *     summary: Registrar un nuevo estudiante
 *     description: Crea una cuenta de estudiante con validación de certificado universitario
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [studentRut, studentEmail, studentName, password, studentCollege, comunaId, regionId, studentCertificateUrl]
 *             properties:
 *               studentRut:
 *                 type: string
 *                 example: "12345678-9"
 *               studentEmail:
 *                 type: string
 *                 format: email
 *                 example: "estudiante@universidad.cl"
 *               studentName:
 *                 type: string
 *                 example: "Juan Pérez"
 *               password:
 *                 type: string
 *                 format: password
 *               studentCollege:
 *                 type: string
 *                 example: "Universidad de Chile"
 *               comunaId:
 *                 type: integer
 *                 example: 1
 *               regionId:
 *                 type: integer
 *                 example: 1
 *               studentCertificateUrl:
 *                 type: string
 *                 format: binary
 *                 description: Certificado universitario (imagen o PDF)
 *     responses:
 *       201:
 *         description: Estudiante registrado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  "/students-register",
  upload.single("studentCertificateUrl"),
  registerStudent,
);

/**
 * @swagger
 * /auth/landlords-register:
 *   post:
 *     tags: [Landlords]
 *     summary: Registrar un nuevo arrendador
 *     description: Crea una cuenta de landlord con validación de carnet de identidad
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [landlordRut, landlordEmail, landlordName, password, comunaId, regionId, landlordCarnet]
 *             properties:
 *               landlordRut:
 *                 type: string
 *                 example: "98765432-1"
 *               landlordEmail:
 *                 type: string
 *                 format: email
 *                 example: "landlord@example.com"
 *               landlordName:
 *                 type: string
 *                 example: "María González"
 *               password:
 *                 type: string
 *                 format: password
 *               comunaId:
 *                 type: integer
 *                 example: 1
 *               regionId:
 *                 type: integer
 *                 example: 1
 *               landlordCarnet:
 *                 type: string
 *                 format: binary
 *                 description: Foto del carnet de identidad
 *     responses:
 *       201:
 *         description: Landlord registrado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  "/landlords-register",
  upload.single("landlordCarnet"),
  registerLandlord,
);

/**
 * @swagger
 * /auth/landlords:
 *   get:
 *     tags: [Landlords]
 *     summary: Obtener lista de landlords
 *     description: Devuelve todos los landlords registrados
 *     responses:
 *       200:
 *         description: Lista de landlords
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Landlord'
 */
router.get("/landlords", getLandlords);

export default router;
