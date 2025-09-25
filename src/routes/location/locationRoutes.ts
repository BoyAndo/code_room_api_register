import { Router } from "express";
import { LocationController } from "../../controllers/locationController";

const locationRoutes = Router();

// Rutas para regiones
locationRoutes.get("/regions", LocationController.getRegions);
locationRoutes.get("/regions/:regionId", LocationController.getRegionById);
locationRoutes.get(
  "/regions/:regionId/comunas",
  LocationController.getCommunesByRegion
);

// Rutas para comunas
locationRoutes.get("/comunas/:comunaId", LocationController.getComunaById);

export default locationRoutes;
