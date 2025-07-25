interface ParsedStudentInfo {
  studentName: string;
  studentRut: string;
  studentCollege: string;
  studentCertEmissionDate: string;
}

export const parseStudentInfo = (rawText: string): ParsedStudentInfo => {
  const lines = rawText
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  console.log("📄 Parseando información del certificado...");

  // Inicializar resultado con valores por defecto
  let result: ParsedStudentInfo = {
    studentName: "Nombre no detectado",
    studentRut: "",
    studentCollege: "Institución desconocida",
    studentCertEmissionDate: "",
  };

  // Extraer información específica del formato de la página
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    const originalLine = lines[i];

    // Buscar solicitante (nombre y RUT)
    if (line.includes("solicitante:") && i + 1 < lines.length) {
      const solicitanteLine = lines[i + 1];
      console.log("👤 Línea de solicitante encontrada:", solicitanteLine);

      // Extraer RUT (formato: texto(xx.xxx.xxx-x))
      const rutMatch = solicitanteLine.match(
        /\((\d{1,2}\.\d{3}\.\d{3}-[\dkK])\)/i
      );
      if (rutMatch) {
        result.studentRut = rutMatch[1];
        console.log("🆔 RUT extraído:", result.studentRut);
      }

      // Extraer nombre (texto antes del paréntesis)
      const nameMatch = solicitanteLine.match(/^(.+?)\(/);
      if (nameMatch) {
        result.studentName = nameMatch[1].trim();
        console.log("👤 Nombre extraído:", result.studentName);
      }
    }

    // Buscar fecha de emisión
    if (line.includes("fecha:") && i + 1 < lines.length) {
      const fechaLine = lines[i + 1];
      // Convertir formato dd-mm-yyyy hh:mm a dd/mm/yyyy
      const fechaMatch = fechaLine.match(/(\d{2})-(\d{2})-(\d{4})/);
      if (fechaMatch) {
        result.studentCertEmissionDate = `${fechaMatch[1]}/${fechaMatch[2]}/${fechaMatch[3]}`;
        console.log("📅 Fecha de emisión:", result.studentCertEmissionDate);
      }
    }

    // Buscar RUT formato DUOC (línea que solo contiene RUT)
    if (/^\d{7,8}-[\dkK]$/.test(originalLine.trim())) {
      result.studentRut = originalLine.trim();
      console.log("🆔 RUT DUOC extraído:", result.studentRut);

      // El nombre debería estar en la línea anterior
      if (i > 0) {
        const nombreLinea = lines[i - 1].trim();
        // Verificar que no sea una palabra clave
        if (
          !nombreLinea.toLowerCase().includes("certificado") &&
          !nombreLinea.toLowerCase().includes("familiar") &&
          nombreLinea.length > 3
        ) {
          result.studentName = nombreLinea;
          console.log("👤 Nombre DUOC extraído:", result.studentName);
        }
      }
    }

    // Buscar fecha formato DUOC ("Emitido el dd/mm/yyyy")
    if (line.includes("emitido el")) {
      const fechaMatch = originalLine.match(
        /emitido el (\d{2}\/\d{2}\/\d{4})/i
      );
      if (fechaMatch) {
        result.studentCertEmissionDate = fechaMatch[1];
        console.log("📅 Fecha DUOC extraída:", result.studentCertEmissionDate);
      }
    }
  }

  // Intentar detectar la institución desde la URL del link compartido
  const linkLine = lines.find((l) => l.includes("http") && l.includes(".cl"));
  if (linkLine) {
    const urlMatch = linkLine.match(/https?:\/\/([^\/]+)/);
    if (urlMatch) {
      result.studentCollege = urlMatch[1];
      console.log("🏫 Institución detectada desde URL:", result.studentCollege);
    }
  }

  console.log("✅ Información parseada:", result);
  return result;
};
