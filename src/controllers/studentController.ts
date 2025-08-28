import { Request, Response } from "express";
import { studentSchema } from "../schemas/student.schema";
import {
  createStudent,
  checkExistingStudent,
} from "../services/studentServices/student.auth.service";
import { generateStudentToken } from "../services/auth.service"; // ← Importar desde el nuevo servicio
import { extractStudentInfo } from "../services/studentServices/extractStudentInfo";
import { allWordsExist, normalizeRut } from "../services/shared/normalize";
import { uploadPdfToBucket } from "../services/shared/s3Service";

export const registerStudent = async (req: Request, res: Response) => {
  try {
    const studentRegisterInfo = studentSchema.parse(req.body);

    console.log("Datos del formulario:", studentRegisterInfo);
    console.log("Archivo PDF recibido:", req.file?.originalname);

    if (!req.file || !req.file.buffer) {
      return res.status(400).json({
        success: false,
        message: "Archivo PDF no enviado o vacío",
      });
    }

    // Extraer datos del certificado
    const studentCertInfo = await extractStudentInfo(req.file.buffer);
    console.log("Datos del certificado extraídos:", studentCertInfo);

    // Validar coincidencia de datos
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

    // Subir PDF y crear estudiante
    const pdfUrl = await uploadPdfToBucket(req.file);
    const newStudent = await createStudent(studentRegisterInfo, pdfUrl);

    // Generar token
    const token = generateStudentToken(newStudent);

    // Responder al frontend
    return res.status(200).json({
      success: true,
      token,
      userType: 'student'
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
  }
};