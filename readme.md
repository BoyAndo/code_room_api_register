# Back Auth Code Room

Este proyecto es una API backend para la autenticación y registro de estudiantes, incluyendo la validación de certificados en PDF. Está construido con Node.js, Express y TypeScript.

## Características

- Registro de usuarios con validación de datos personales y certificados estudiantiles.
- Validación flexible de campos como nombre, RUT y colegio.
- Uso de Prisma para la gestión de base de datos.
- Manejo seguro de variables de entorno.
- Estructura modular y buenas prácticas de desarrollo.

## Requisitos

- Node.js >= 18.x
- npm >= 9.x
- Base de datos compatible con Prisma (ej: SQLite, PostgreSQL, MySQL)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/back_auth_code_room.git
   cd back_auth_code_room
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno necesarias (ejemplo: conexión a la base de datos).

4. Si usas Prisma, ejecuta las migraciones:
   ```sh
   npx prisma migrate dev
   ```

## Scripts

- `npm run dev` — Inicia el servidor en modo desarrollo.
- `npm run build` — Compila el proyecto TypeScript a JavaScript.
- `npm start` — Inicia el servidor en modo producción.

## Estructura del Proyecto

```
src/
  controllers/      # Controladores de rutas
  services/         # Lógica de negocio y servicios externos
  schemas/          # Esquemas de validación (ej: Zod)
  prisma/           # Esquema y migraciones de Prisma
  ...
.env                # Variables de entorno (no subir al repo)
.gitignore          # Archivos y carpetas ignorados por git
```

## Notas

- **No subas tu archivo `.env` ni archivos de base de datos locales (`prisma/dev.db`) al repositorio.**
- La carpeta `prisma/` sí debe subirse, ya que contiene el esquema y migraciones necesarias para la base de datos.
- Puedes personalizar la validación de campos en los controladores según tus necesidades.

## Contribución

¡Las contribuciones son bienvenidas! Abre un issue o pull request para sugerencias o mejoras.
