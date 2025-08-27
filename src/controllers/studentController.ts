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

    // Responder al frontend
    return res.status(200).json(token);
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
