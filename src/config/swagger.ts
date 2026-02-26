import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "URoom API - Authentication & Registration",
      version: "1.0.0",
      description:
        "API para autenticación y registro de estudiantes y landlords en la plataforma URoom",
      contact: {
        name: "API Support",
        email: "support@uroom.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor de desarrollo",
      },
      {
        url: "https://uroom-api.gabogrobier.dev",
        description: "Servidor de producción",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Introduce el token JWT obtenido del login",
        },
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "accessToken",
          description: "Token de acceso almacenado en cookies",
        },
      },
      schemas: {
        Student: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            studentRut: { type: "string", example: "12345678-9" },
            studentEmail: {
              type: "string",
              format: "email",
              example: "estudiante@universidad.cl",
            },
            studentName: { type: "string", example: "Juan Pérez" },
            studentCollege: { type: "string", example: "Universidad de Chile" },
            studentCertificateUrl: { type: "string", example: "https://..." },
            profilePhotoUrl: { type: "string", nullable: true },
            role: { type: "string", example: "student" },
            comunaId: { type: "integer", example: 1 },
            regionId: { type: "integer", example: 1 },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Landlord: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            landlordRut: { type: "string", example: "98765432-1" },
            landlordEmail: {
              type: "string",
              format: "email",
              example: "landlord@example.com",
            },
            landlordName: { type: "string", example: "María González" },
            landlordCarnet: { type: "string", example: "https://..." },
            profilePhotoUrl: { type: "string", nullable: true },
            role: { type: "string", example: "landlord" },
            comunaId: { type: "integer", example: 1 },
            regionId: { type: "integer", example: 1 },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "user@example.com",
            },
            password: {
              type: "string",
              format: "password",
              example: "password123",
            },
          },
        },
        LoginResponse: {
          type: "object",
          properties: {
            message: { type: "string", example: "Login exitoso" },
            user: {
              type: "object",
              properties: {
                id: { type: "integer" },
                email: { type: "string" },
                name: { type: "string" },
                role: { type: "string" },
              },
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: { type: "string", example: "Error description" },
            error: { type: "string", example: "Error details" },
          },
        },
        Region: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nombre: { type: "string", example: "Región Metropolitana" },
            codigo: { type: "string", example: "13" },
          },
        },
        Comuna: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nombre: { type: "string", example: "Santiago" },
            regionId: { type: "integer", example: 1 },
          },
        },
      },
    },
    tags: [
      {
        name: "Authentication",
        description: "Endpoints de autenticación y sesión",
      },
      {
        name: "Students",
        description: "Registro y gestión de estudiantes",
      },
      {
        name: "Landlords",
        description: "Registro y gestión de arrendadores",
      },
      {
        name: "Locations",
        description: "Regiones y comunas de Chile",
      },
      {
        name: "Profile",
        description: "Gestión de perfiles de usuario",
      },
    ],
  },
  apis: ["./src/routes/**/*.ts", "./src/controllers/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express): void => {
  // Swagger UI
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
      customCss: ".swagger-ui .topbar { display: none }",
      customSiteTitle: "URoom API Documentation",
    }),
  );

  // JSON endpoint
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log("📚 Swagger documentation available at /api-docs");
};

export default swaggerSpec;
