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

  // Fecha de emisión
  const fechaLinea = lines.find((l) => l.toLowerCase().includes("emitido el"));
  const fechaMatch = fechaLinea?.match(/(\d{2}\/\d{2}\/\d{4})/);
  const studentCertEmissionDate = fechaMatch?.[1] ?? "";

  // RUT
  const rutRegex = /\b\d{7,8}-[0-9kK]\b/;
  const rutLinea = lines.find((l) => rutRegex.test(l));
  const studentRut = rutLinea?.match(rutRegex)?.[0] ?? "";

  // Nombre (línea anterior al RUT)
  const rutIndex = lines.findIndex((l) => l.includes(studentRut));
  const studentName =
    rutIndex > 0 ? lines[rutIndex - 1].trim() : "Nombre no detectado";

  // Institución (últimas líneas)
  const collegeLinea = [...lines]
    .reverse()
    .find((l) => /(ir a\s*)?([\w.-]+\.(cl|edu|com))/.test(l.toLowerCase()));
  const collegeMatch = collegeLinea?.match(/([\w.-]+\.(cl|edu|com))/);
  const studentCollege = collegeMatch?.[1] ?? "Institución desconocida";

  return {
    studentName,
    studentRut,
    studentCollege,
    studentCertEmissionDate,
  };
};
