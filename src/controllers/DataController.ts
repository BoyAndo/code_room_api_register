import { Request, Response } from "express";
// 💡 ASUME que tienes tu cliente Prisma correctamente generado
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

// Tipo base para el mapeo de ID a Nombre, incluyendo metadatos para el chat
interface Item {
  id: number;
  name: string;
  college?: string;
  isVerified?: boolean;
}

/**
 * Controlador para resolver nombres (título de propiedad, nombre de estudiante/arrendador)
 * a partir de una lista de IDs provenientes de las conversaciones de chat.
 */
export const resolveNames = async (req: Request, res: Response) => {
  try {
    // 1. RECEPCIÓN DE DATOS
    const { propertyIds, studentIds, landlordIds } = req.body as {
      propertyIds?: Array<string | number>;
      studentIds?: Array<string | number>;
      landlordIds?: Array<string | number>; // ✅ Incluimos Landlord IDs
    };

    // Función auxiliar para convertir IDs de string/number a un array de números enteros válidos
    const convertAndFilter = (ids: Array<string | number> | undefined) =>
      (ids || [])
        .map((id) =>
          Number.isFinite(Number(id)) ? parseInt(String(id), 10) : NaN
        )
        .filter((v): v is number => Number.isInteger(v));

    const numericPropertyIds = convertAndFilter(propertyIds);
    const numericStudentIds = convertAndFilter(studentIds);
    const numericLandlordIds = convertAndFilter(landlordIds);

    // -----------------------------------------------------
    // 2. CONSULTA PROPIEDADES (Título)
    // -----------------------------------------------------
    let propertiesData: Item[] = [];
    if (numericPropertyIds.length > 0) {
      const properties = await prisma.property.findMany({
        where: { id: { in: numericPropertyIds } },
        select: { id: true, title: true },
      });
      propertiesData = properties.map((p: { id: number; title: string }) => ({
        id: p.id,
        name: p.title,
      }));
    }

    // -----------------------------------------------------
    // 3. CONSULTA USUARIOS (Estudiantes y Arrendadores)
    // -----------------------------------------------------
    let studentsData: Item[] = [];
    let landlordsData: Item[] = [];

    // a) Estudiantes
    if (numericStudentIds.length > 0) {
      const students = await prisma.student.findMany({
        where: { id: { in: numericStudentIds } },
        select: {
          id: true,
          studentName: true,
          studentCollege: true,
          studentCertificateUrl: true,
        },
      });

      studentsData = students.map(
        (s: {
          id: number;
          studentName: string;
          studentCollege?: string | null;
          studentCertificateUrl?: string | null;
        }) => ({
          id: s.id,
          name: s.studentName,
          college: s.studentCollege ?? undefined,
          isVerified: Boolean(s.studentCertificateUrl),
        })
      );
    }

    // b) Arrendadores
    if (numericLandlordIds.length > 0) {
      // ✅ Consulta a la tabla 'Landlord'
      const landlords = await prisma.landlord.findMany({
        where: { id: { in: numericLandlordIds } },
        select: {
          id: true,
          landlordName: true,
        },
      });
      landlordsData = landlords.map(
        (l: { id: number; landlordName: string }) => ({
          id: l.id,
          name: l.landlordName,
        })
      );
    }

    // -----------------------------------------------------
    // 4. CONSOLIDACIÓN Y RESPUESTA
    // -----------------------------------------------------
    const usersData: Item[] = [
      ...studentsData,
      ...landlordsData, // ✅ Consolidamos ambos tipos de usuario
    ];

    return res.status(200).json({
      properties: propertiesData,
      users: usersData,
    });
  } catch (error) {
    console.error("🛑 Error en resolveNames:", error);
    return res
      .status(500)
      .json({ error: "Fallo interno del servidor al resolver nombres" });
  }
};
