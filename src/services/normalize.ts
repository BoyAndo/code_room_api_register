export const normalize = (str: string) =>
  str
    .normalize("NFD") // separa letras y tildes
    .replace(/[\u0300-\u036f]/g, "") // elimina las tildes
    .replace(/[^\w\s]/g, "") // elimina símbolos raros (opcional, solo letras, números y espacios)
    .replace(/\s+/g, " ") // convierte múltiples espacios en uno solo
    .trim() // elimina espacios al inicio y final
    .toLowerCase(); // pasa todo a minúsculas // elimina espacios

export const allWordsExist = (nameBase: string, nameCheck: string): boolean => {
  const baseWords = normalize(nameBase).split(" ");
  const checkWords = normalize(nameCheck).split(" ");
  // Retorna true si TODAS las palabras de nameCheck están en nameBase
  return checkWords.every((word) => baseWords.includes(word));
};

export function normalizeRut(rut: string): string {
  return rut
    .normalize("NFD") // Quita tildes (por si acaso)
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\./g, "") // Quita puntos
    .replace(/-/g, "") // Quita guion
    .replace(/\s+/g, "") // Quita todos los espacios
    .toLowerCase(); // Minúsculas para uniformidad (importante para la 'k')
}
