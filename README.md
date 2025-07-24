# 🏠 Code Room API - Sistema de Autenticación y Registro

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748.svg)](https://www.prisma.io/)
[![Express](https://img.shields.io/badge/Express-5.x-000000.svg)](https://expressjs.com/)
[![MinIO](https://img.shields.io/badge/MinIO-S3%20Compatible-C72E29.svg)](https://min.io/)

**Code Room** es una plataforma educativa que conecta estudiantes con arrendadores para facilitar el acceso a alojamiento estudiantil. Esta API maneja la autenticación, registro y verificación automática de certificados estudiantiles.

## 🏗️ Arquitectura del Sistema

```mermaid
graph TB
    Frontend[Frontend React/Next.js] --> API[Code Room API Auth]
    API --> DB[(Base de Datos MySQL)]
    API --> Storage[MinIO Storage Service]
    API --> Scraper[Certificate Scraper Service]

    subgraph "Microservicios"
        API
        Storage
        Scraper
    end
```

## 🚀 Características Principales

### 🔐 **Autenticación y Autorización**

- Sistema JWT con claves RSA (RS256)
- Middleware de autenticación robusto
- Gestión de sesiones seguras
- Validación de tokens con expiración

### 📋 **Registro de Usuarios**

- **Estudiantes**: Verificación automática con certificados educacionales
- **Arrendadores**: Proceso de registro con validación de identidad
- Validación de datos con Zod schemas
- Upload seguro de documentos

### 🎓 **Verificación de Certificados**

- Procesamiento automático de PDFs educacionales
- Extracción de códigos QR desde certificados
- Scraping automático de información estudiantil
- Soporte para múltiples instituciones (USS, DUOC UC, etc.)

### 🗄️ **Gestión de Almacenamiento**

- Integración con MinIO (S3-compatible)
- Upload seguro de archivos
- Gestión automática de buckets
- URLs pre-firmadas para acceso controlado

## 🛠️ Stack Tecnológico

### **Backend Core**

- **Node.js 18+** - Runtime de JavaScript
- **TypeScript 5+** - Tipado estático
- **Express 5** - Framework web
- **Prisma 6** - ORM y migraciones

### **Base de Datos**

- **MySQL 8+** - Base de datos principal
- **Prisma Client** - Query builder type-safe

### **Autenticación**

- **JWT (RS256)** - Tokens con firma RSA
- **bcrypt** - Hash de contraseñas
- **Claves RSA** - Firma y verificación de tokens

### **Procesamiento de Documentos**

- **pdf-poppler** - Conversión PDF a imagen
- **jsQR** - Lectura de códigos QR
- **Jimp** - Procesamiento de imágenes

### **Almacenamiento**

- **MinIO** - Storage S3-compatible
- **AWS SDK v3** - Cliente para operaciones S3

### **Validación**

- **Zod** - Validación de schemas
- **Multer** - Upload de archivos

## 📁 Estructura del Proyecto

```
code_room_api_auth/
├── src/
│   ├── controllers/          # Controladores de rutas
│   │   ├── loginController.ts
│   │   └── registerController.ts
│   ├── middlewares/          # Middlewares personalizados
│   │   └── multer.ts
│   ├── models/              # Modelos y interfaces
│   │   ├── user.interface.ts
│   │   ├── jwt.interface.ts
│   │   └── user.ts
│   ├── routes/              # Definición de rutas
│   │   └── auth/
│   │       └── authRoutes.ts
│   ├── schemas/             # Schemas de validación
│   │   └── user.schema.ts
│   ├── services/            # Lógica de negocio
│   │   ├── auth.service.ts
│   │   ├── password.service.ts
│   │   ├── s3Service.ts
│   │   ├── extractStudentInfo.ts
│   │   ├── pdfToImage.ts
│   │   ├── readQrFromImage.ts
│   │   ├── runPythonScraper.ts
│   │   └── parseStudentInfo.ts
│   ├── types/               # Definiciones de tipos
│   │   └── pdf-poppler.d.ts
│   ├── app.ts              # Configuración de Express
│   └── server.ts           # Punto de entrada
├── prisma/
│   ├── schema.prisma       # Schema de base de datos
│   └── migrations/         # Migraciones
├── private.pem             # Clave privada RSA
├── public.pem              # Clave pública RSA
├── .env                    # Variables de entorno
└── package.json
```

## 🔧 Instalación y Configuración

### **1. Prerrequisitos**

```bash
# Versiones requeridas
Node.js >= 18.0.0
npm >= 9.0.0
MySQL >= 8.0.0
```

### **2. Clonar el repositorio**

```bash
git clone https://github.com/BoyAndo/code_room_api_auth.git
cd code_room_api_auth
```

### **3. Instalar dependencias**

```bash
npm install
```

### **4. Configurar variables de entorno**

```bash
# Copiar template de configuración
cp .env.template .env

# Editar variables de entorno
nano .env
```

#### **Variables de Entorno Requeridas:**

```bash
# Servidor
PORT=3000

# Base de Datos
DATABASE_URL="mysql://usuario:password@localhost:3306/database"
MYSQL_USER=tu_usuario
MYSQL_PASSWORD=tu_password
MYSQL_DB=tu_database

# JWT
PRIVATE_KEY_PATH="private.pem"
PUBLIC_KEY_PATH="public.pem"

# MinIO Storage
MINIO_ENDPOINT=http://localhost:9000
MINIO_USER=minioadmin
MINIO_PASS=minioadmin123
URL_S3=http://localhost:9000/certificados/

# Microservicio Python
PYTHON_SERVICE_URL=http://localhost:8001
```

### **5. Generar claves RSA para JWT**

```bash
# Generar clave privada
openssl genpkey -algorithm RSA -out private.pem -pkcs8 -aes256

# Extraer clave pública
openssl rsa -pubout -in private.pem -out public.pem
```

### **6. Configurar base de datos**

```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev
```

### **7. Iniciar servicios dependientes**

#### **MinIO Storage:**

```bash
# Clonar repositorio de storage
git clone https://github.com/BoyAndo/code_room_storage_service.git
cd code_room_storage_service

# Iniciar MinIO
docker-compose up -d
```

#### **Certificate Scraper Service:**

```bash
# Clonar repositorio del scraper
git clone https://github.com/BoyAndo/certificate-scraper-service.git
cd certificate-scraper-service

# Iniciar servicio Python
docker-compose up -d
```

### **8. Iniciar la aplicación**

```bash
# Modo desarrollo
npm run dev

# La API estará disponible en http://localhost:3000
```

## 📡 Endpoints de la API

### **🔐 Autenticación**

#### **POST** `/auth/login`

Iniciar sesión con credenciales.

**Request:**

```json
{
  "email": "estudiante@ejemplo.com",
  "password": "mi_password_seguro"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "estudiante@ejemplo.com",
    "name": "Juan Pérez",
    "role": "student",
    "college": "Universidad de Santiago"
  }
}
```

### **📋 Registro**

#### **POST** `/auth/register`

Registrar nuevo usuario (estudiante o arrendador).

**Content-Type:** `multipart/form-data`

**Request (Estudiante):**

```bash
curl -X POST http://localhost:3000/auth/register \
  -F "studentName=Juan Pérez García" \
  -F "studentRut=12345678-9" \
  -F "studentEmail=juan@ejemplo.com" \
  -F "password=password123" \
  -F "studentCollege=Universidad de Santiago" \
  -F "file=@certificado_estudiantil.pdf"
```

**Response:**

```json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 1,
    "name": "Juan Pérez García",
    "email": "juan@ejemplo.com",
    "rut": "12345678-9",
    "role": "student",
    "college": "Universidad de Santiago",
    "isVerified": true,
    "certificateUrl": "http://localhost:9000/certificados/1642534567890-certificado.pdf"
  },
  "certificateData": {
    "studentName": "JUAN PÉREZ GARCÍA",
    "studentRut": "12345678-9",
    "studentCollege": "Universidad de Santiago",
    "studentCertEmissionDate": "2024-01-15"
  }
}
```

## 🔄 Flujo de Registro de Estudiantes

```mermaid
sequenceDiagram
    participant Client as Cliente
    participant API as Code Room API
    participant Storage as MinIO Storage
    participant Scraper as Python Scraper
    participant DB as Base de Datos

    Client->>API: POST /auth/register (PDF + datos)
    API->>Storage: Upload PDF certificado
    Storage-->>API: URL del archivo

    API->>API: Convertir PDF a imagen
    API->>API: Extraer QR de imagen
    API->>Scraper: Scraping con URL del QR
    Scraper-->>API: Datos del certificado

    API->>API: Validar datos extraídos
    API->>DB: Crear usuario verificado
    DB-->>API: Usuario creado
    API-->>Client: Usuario registrado + token JWT
```

## 🎓 Tipos de Usuario

### **👨‍🎓 Estudiante (Student)**

- **Verificación automática** mediante certificado educacional
- **Datos extraídos**: Nombre, RUT, institución, fecha de emisión
- **Privilegios**: Buscar y solicitar alojamiento
- **Documentos**: Certificado de alumno regular (PDF)

### **🏠 Arrendador (Landlord)** _[Próximamente]_

- **Verificación manual** de identidad y propiedad
- **Datos requeridos**: Nombre, RUT, contacto, documentos de propiedad
- **Privilegios**: Publicar propiedades, gestionar solicitudes
- **Documentos**: Cédula de identidad, escritura/contrato de propiedad

## 🔒 Seguridad

### **Autenticación JWT**

- Tokens firmados con **RS256** (RSA + SHA-256)
- Claves RSA de 2048 bits mínimo
- Expiración configurable de tokens
- Refresh tokens para sesiones extendidas

### **Validación de Datos**

- Schemas Zod para validación estricta
- Sanitización de inputs
- Validación de archivos (tipo, tamaño)

### **Almacenamiento Seguro**

- Passwords hasheados con bcrypt (rounds: 12)
- Archivos almacenados en MinIO con URLs pre-firmadas
- Separación de servicios por seguridad

## 🚀 Microservicios Relacionados

### **📦 MinIO Storage Service**

```bash
# Repositorio
https://github.com/BoyAndo/code_room_storage_service

# Funcionalidad
- Almacenamiento S3-compatible
- Gestión de buckets automática
- URLs pre-firmadas para acceso seguro
```

### **🐍 Certificate Scraper Service**

```bash
# Repositorio
https://github.com/BoyAndo/certificate-scraper-service

# Funcionalidad
- Scraping automático de portales educacionales
- Resolución de CAPTCHA con Whisper AI
- Extracción de datos estudiantiles
- Soporte para múltiples instituciones
```

## 🧪 Testing

### **Probar registro de estudiante:**

```bash
# Usando curl
curl -X POST http://localhost:3000/auth/register \
  -F "studentName=Juan Pérez" \
  -F "studentRut=12345678-9" \
  -F "studentEmail=juan@test.com" \
  -F "password=test123" \
  -F "studentCollege=Universidad de Santiago" \
  -F "file=@certificado-prueba.pdf"
```

### **Probar login:**

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@test.com",
    "password": "test123"
  }'
```

## 📊 Monitoreo y Logs

### **Logs de Aplicación**

```typescript
// Ejemplos de logs durante el proceso
📄 Iniciando extracción de información del PDF...
🖼️  Convirtiendo PDF a imagen...
📱 Leyendo código QR de la imagen...
🐍 Ejecutando scraping Python...
✅ Usuario registrado exitosamente
```

### **Health Check**

```bash
# Verificar estado de la API
curl http://localhost:3000/health

# Response
{
  "status": "ok",
  "timestamp": "2024-07-23T15:30:00.000Z",
  "uptime": 3600,
  "database": "connected",
  "storage": "available"
}
```

## 🔮 Roadmap y Próximas Características

### **🏠 Sistema de Arrendadores** _[En Desarrollo]_

- Registro y verificación de arrendadores
- Validación de documentos de propiedad
- Panel de administración de propiedades
- Sistema de calificaciones y reseñas

### **🔍 Funcionalidades Planificadas**

- [ ] **Verificación 2FA** para cuentas de arrendador
- [ ] **API de geolocalización** para propiedades
- [ ] **Sistema de mensajería** entre usuarios
- [ ] **Integración de pagos** (Stripe/PayPal)
- [ ] **Notificaciones push** en tiempo real
- [ ] **Analytics y métricas** de uso
- [ ] **API de matching** inteligente estudiante-propiedad

### **🧪 Mejoras Técnicas**

- [ ] **Rate limiting** avanzado
- [ ] **Caching con Redis** para performance
- [ ] **Logs estructurados** con Winston
- [ ] **Tests automatizados** (Jest + Supertest)
- [ ] **CI/CD pipeline** con GitHub Actions
- [ ] **Documentación OpenAPI** (Swagger)

## 🤝 Contribución

### **Desarrollo Local**

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### **Estándares de Código**

- **ESLint** para linting
- **Prettier** para formatting
- **Conventional Commits** para mensajes
- **TypeScript strict mode** habilitado

## 📞 Soporte y Contacto

### **Desarrollador Principal**

- **GitHub**: [@BoyAndo](https://github.com/BoyAndo)
- **Email**: contacto@coderoom.com

### **Repositorios Relacionados**

- **API Principal**: [code_room_api_auth](https://github.com/BoyAndo/code_room_api_auth)
- **Storage Service**: [code_room_storage_service](https://github.com/BoyAndo/code_room_storage_service)
- **Certificate Scraper**: [certificate-scraper-service](https://github.com/BoyAndo/certificate-scraper-service)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**🏠 Code Room** - _Conectando estudiantes con su hogar ideal para el éxito académico_

[![Made with ❤️ by BoyAndo](https://img.shields.io/badge/Made%20with%20❤️%20by-BoyAndo-red.svg)](https://github.com/BoyAndo)
