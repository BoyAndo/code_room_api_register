import { Router } from "express";
import { LocationController } from "../../controllers/locationController";

const locationRoutes = Router();

/**
 * @swagger
 * /locations/regions:
 *   get:
 *     tags: [Locations]
 *     summary: Obtener todas las regiones de Chile
 *     description: Devuelve la lista completa de regiones
 *     responses:
 *       200:
 *         description: Lista de regiones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Region'
 */
locationRoutes.get("/regions", LocationController.getRegions);

/**
 * @swagger
 * /locations/regions/{regionId}:
 *   get:
 *     tags: [Locations]
 *     summary: Obtener una región por ID
 *     description: Devuelve los detalles de una región específica
 *     parameters:
 *       - in: path
 *         name: regionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la región
 *     responses:
 *       200:
 *         description: Detalles de la región
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Region'
 *       404:
 *         description: Región no encontrada
 */
locationRoutes.get("/regions/:regionId", LocationController.getRegionById);

/**
 * @swagger
 * /locations/regions/{regionId}/comunas:
 *   get:
 *     tags: [Locations]
 *     summary: Obtener comunas de una región
 *     description: Devuelve todas las comunas pertenecientes a una región específica
 *     parameters:
 *       - in: path
 *         name: regionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la región
 *     responses:
 *       200:
 *         description: Lista de comunas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comuna'
 */
locationRoutes.get(
  "/regions/:regionId/comunas",
  LocationController.getCommunesByRegion,
);

/**
 * @swagger
 * /locations/comunas/{comunaId}:
 *   get:
 *     tags: [Locations]
 *     summary: Obtener una comuna por ID
 *     description: Devuelve los detalles de una comuna específica
 *     parameters:
 *       - in: path
 *         name: comunaId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la comuna
 *     responses:
 *       200:
 *         description: Detalles de la comuna
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comuna'
 *       404:
 *         description: Comuna no encontrada
 */
locationRoutes.get("/comunas/:comunaId", LocationController.getComunaById);

export default locationRoutes;
