import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { studentSchema } from "../schemas/student.schema";
import {
  createUser,
  generateClientToken,
} from "../services/studentServices/student.auth.service";
import { extractStudentInfo } from "../services/studentServices/extractStudentInfo";
import { allWordsExist, normalizeRut } from "../services/shared/normalize";
import { uploadPdfToBucket } from "../services/shared/s3Service";
import prisma from "../models/user";

export const registerStudent = async (req: Request, res: Response) => {
  try {
    // Validar y obtener datos del formulario
    const studentRegisterInfo = studentSchema.parse(req.body);

    // debugging: Imprimir datos del formulario
    console.log("Datos del formulario:", studentRegisterInfo);
    console.log("Archivo PDF recibido:", req.file?.originalname);

    // Verificar si se recibió un archivo PDF
    if (!req.file || !req.file.buffer) {
      res.status(400).json({
        success: false,
        message: "Archivo PDF no enviado o vacío",
      });
      return;
    }

    // Extraer datos del certificado desde el buffer
    const studentCertInfo = await extractStudentInfo(req.file.buffer);
    console.log("Datos del certificado extraídos:", studentCertInfo);
    //Comparar los datos del certificado con los datos del usuario
    //falta validar studentCollege evaluar si es necesario
    if (
      normalizeRut(studentRegisterInfo.studentRut) !==
        normalizeRut(studentCertInfo.studentRut) &&
      !allWordsExist(
        studentRegisterInfo.studentName,
        studentCertInfo.studentName
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Los datos del certificado no coinciden con los del usuario",
      });
    }

    // Subir el PDF a S3 y obtener la URL
    const pdfUrl = await uploadPdfToBucket(req.file);

    // Registrar al usuario
    const newStudent = await createUser(studentRegisterInfo, pdfUrl);

    // Generar token
    const token = generateClientToken({
      id: newStudent.id,
      studentRut: newStudent.studentRut,
      studentEmail: newStudent.studentEmail,
      studentName: newStudent.studentName,
      studentCollege: newStudent.studentCollege,
      studentCertificateUrl: newStudent.studentCertificateUrl,
      role: newStudent.role,
    });

    // Configurar cookie httpOnly para auto-login después del registro
    res.cookie("authToken", token, {
      httpOnly: true, //no accesible con xss
      sameSite: "lax", //balance entre seguridad y UX - permite navegación por enlaces externos
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
    });

    // Responder al frontend
    return res.status(201).json({
      success: true,
      message: "Estudiante registrado exitosamente",
      token, // Token visible para desarrollo/testing
    });
  } catch (error: any) {
    console.error("Error en el registro:", error);

    if (error?.errors) {
      return res.status(400).json({
        success: false,
        message: "Datos inválidos",
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
    return;
  }
};

//get all students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany({
      select: {
        id: true,
        studentName: true,
        studentCollege: true,
      },
    });
    return res.status(200).json({ students });
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    throw error;
  }
};

// Eliminar estudiante
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "No autorizado",
      });
    }

    // Verificar que el usuario existe
    const student = await prisma.student.findUnique({
      where: { id: userId },
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Estudiante no encontrado",
      });
    }

    // Eliminar el estudiante (las refresh tokens se eliminan automáticamente por cascade)
    await prisma.student.delete({
      where: { id: userId },
    });

    // Limpiar las cookies
    res.clearCookie("authToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Cuenta eliminada exitosamente",
    });
  } catch (error) {
    console.error("Error al eliminar estudiante:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};
