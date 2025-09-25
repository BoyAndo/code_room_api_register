import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class LocationController {
  /**
   * Obtener todas las regiones de Chile
   * GET /locations/regions
   */
  static async getRegions(req: Request, res: Response) {
    try {
      const regions = await prisma.region.findMany({
        orderBy: {
          name: "asc",
        },
      });

      return res.status(200).json(regions);
    } catch (error) {
      console.error("Error fetching regions:", error);
      return res.status(500).json({
        message: "Error interno del servidor al obtener las regiones",
        error: process.env.NODE_ENV === "development" ? error : undefined,
      });
    }
  }

  /**
   * Obtener todas las comunas de una región específica
   * GET /locations/regions/:regionId/comunas
   */
  static async getCommunesByRegion(req: Request, res: Response) {
    try {
      const { regionId } = req.params;

      // Validar que regionId sea un número
      const regionIdNumber = parseInt(regionId);
      if (isNaN(regionIdNumber)) {
        return res.status(400).json({
          message: "El ID de la región debe ser un número válido",
        });
      }

      // Verificar que la región existe
      const region = await prisma.region.findUnique({
        where: { id: regionIdNumber },
      });

      if (!region) {
        return res.status(404).json({
          message: "La región especificada no existe",
        });
      }

      // Obtener las comunas de la región
      const comunas = await prisma.comuna.findMany({
        where: {
          regionId: regionIdNumber,
        },
        orderBy: {
          name: "asc",
        },
        include: {
          region: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
        },
      });

      return res.status(200).json(comunas);
    } catch (error) {
      console.error("Error fetching communes by region:", error);
      return res.status(500).json({
        message: "Error interno del servidor al obtener las comunas",
        error: process.env.NODE_ENV === "development" ? error : undefined,
      });
    }
  }

  /**
   * Obtener una región específica por ID
   * GET /locations/regions/:regionId
   */
  static async getRegionById(req: Request, res: Response) {
    try {
      const { regionId } = req.params;

      const regionIdNumber = parseInt(regionId);
      if (isNaN(regionIdNumber)) {
        return res.status(400).json({
          message: "El ID de la región debe ser un número válido",
        });
      }

      const region = await prisma.region.findUnique({
        where: { id: regionIdNumber },
        include: {
          comunas: {
            orderBy: {
              name: "asc",
            },
          },
        },
      });

      if (!region) {
        return res.status(404).json({
          message: "La región especificada no existe",
        });
      }

      return res.status(200).json(region);
    } catch (error) {
      console.error("Error fetching region by ID:", error);
      return res.status(500).json({
        message: "Error interno del servidor al obtener la región",
        error: process.env.NODE_ENV === "development" ? error : undefined,
      });
    }
  }

  /**
   * Obtener una comuna específica por ID
   * GET /locations/comunas/:comunaId
   */
  static async getComunaById(req: Request, res: Response) {
    try {
      const { comunaId } = req.params;

      const comunaIdNumber = parseInt(comunaId);
      if (isNaN(comunaIdNumber)) {
        return res.status(400).json({
          message: "El ID de la comuna debe ser un número válido",
        });
      }

      const comuna = await prisma.comuna.findUnique({
        where: { id: comunaIdNumber },
        include: {
          region: true,
        },
      });

      if (!comuna) {
        return res.status(404).json({
          message: "La comuna especificada no existe",
        });
      }

      return res.status(200).json(comuna);
    } catch (error) {
      console.error("Error fetching comuna by ID:", error);
      return res.status(500).json({
        message: "Error interno del servidor al obtener la comuna",
        error: process.env.NODE_ENV === "development" ? error : undefined,
      });
    }
  }
}
