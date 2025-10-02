# 🔐 Sistema de Refresh Tokens - Code Room

## 📋 Descripción General

Se ha implementado un sistema completo de **refresh tokens** con rotación automática siguiendo las mejores prácticas de seguridad para autenticación JWT.

## 🎯 Problema Resuelto

**Antes:**

- Access token con duración de 120 horas (5 días)
- Cuando el token expiraba, el usuario debía hacer login completo nuevamente
- No había forma de invalidar tokens sin esperar su expiración
- Tokens de larga duración representan un riesgo de seguridad

**Después:**

- **Access Token**: 15 minutos (corta duración)
- **Refresh Token**: 7 días (larga duración)
- Renovación automática sin re-login
- Sistema de invalidación de tokens
- Rotación de refresh tokens para mayor seguridad

## 🏗️ Arquitectura del Sistema

### **Tokens Implementados**

#### 1. Access Token (authToken)

- **Duración**: 15 minutos
- **Uso**: Autenticación de requests a la API
- **Almacenamiento**: Cookie httpOnly
- **Renovación**: Automática usando refresh token

#### 2. Refresh Token (refreshToken)

- **Duración**: 7 días
- **Uso**: Renovar access tokens expirados
- **Almacenamiento**: Cookie httpOnly + Base de datos
- **Seguridad**: Rotación automática en cada uso

### **Flujo de Autenticación**

```
1. LOGIN
   ├─ Usuario envía credenciales
   ├─ Backend valida credenciales
   ├─ Genera Access Token (15min)
   ├─ Genera Refresh Token (7 días)
   ├─ Almacena Refresh Token en BD
   ├─ Envía ambos tokens en cookies httpOnly
   └─ Usuario autenticado ✓

2. REQUEST NORMAL (Access Token válido)
   ├─ Frontend envía request con authToken cookie
   ├─ Middleware verifica access token
   ├─ Token válido → Permite acceso ✓
   └─ Respuesta exitosa

3. REQUEST CON TOKEN EXPIRADO
   ├─ Frontend envía request con authToken cookie
   ├─ Middleware verifica access token
   ├─ Token expirado → Responde 401 con shouldRefresh: true
   ├─ Frontend detecta shouldRefresh
   ├─ Frontend llama a POST /auth/refresh automáticamente
   ├─ Backend valida refreshToken cookie
   ├─ Genera nuevo Access Token
   ├─ Revoca Refresh Token anterior
   ├─ Genera nuevo Refresh Token (rotación)
   ├─ Actualiza ambas cookies
   └─ Frontend reintenta request original ✓

4. LOGOUT
   ├─ Frontend envía POST /auth/logout
   ├─ Backend revoca Refresh Token en BD
   ├─ Backend limpia ambas cookies
   └─ Usuario deslogueado ✓
```

## 📡 Endpoints Implementados

### **POST /auth/login**

Inicia sesión y genera ambos tokens.

**Request:**

```json
{
  "email": "usuario@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Access token (también en cookie)
}
```

**Cookies Establecidas:**

- `authToken`: Access token (15 min, httpOnly)
- `refreshToken`: Refresh token (7 días, httpOnly)

---

### **POST /auth/refresh**

Renueva el access token usando el refresh token.

**Request:**
No requiere body. El refresh token se envía automáticamente en la cookie.

**Response (Éxito):**

```json
{
  "success": true,
  "message": "Token renovado exitosamente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Nuevo access token
}
```

**Response (Error - Token inválido):**

```json
{
  "success": false,
  "message": "Refresh token inválido"
}
```

**Response (Error - Token revocado):**

```json
{
  "success": false,
  "message": "Token ha sido revocado"
}
```

**Cookies Actualizadas:**

- `authToken`: Nuevo access token (15 min)
- `refreshToken`: Nuevo refresh token rotado (7 días)

---

### **POST /auth/logout**

Cierra sesión e invalida el refresh token.

**Request:**
No requiere body.

**Response:**

```json
{
  "success": true,
  "message": "Logout exitoso"
}
```

**Cookies Eliminadas:**

- `authToken`
- `refreshToken`

---

### **GET /auth/me**

Obtiene información del usuario autenticado (requiere access token válido).

**Headers:**

```
Cookie: authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (Éxito):**

```json
{
  "success": true,
  "user": {
    "id": 1,
    "studentEmail": "estudiante@example.com",
    "studentName": "Juan Pérez",
    "role": "student"
    // ... otros campos según el tipo de usuario
  },
  "message": "Usuario obtenido exitosamente"
}
```

**Response (Token expirado):**

```json
{
  "success": false,
  "message": "Token expirado. Por favor, utiliza el refresh token para obtener uno nuevo.",
  "error": "TokenExpiredError",
  "shouldRefresh": true // ← Frontend debe llamar a /auth/refresh
}
```

## 🔒 Modelo de Base de Datos

### Tabla `RefreshToken`

```prisma
model RefreshToken {
  id          Int       @id @default(autoincrement())
  token       String    @unique @db.VarChar(500)
  studentId   Int?      // ID del estudiante (nullable)
  landlordId  Int?      // ID del landlord (nullable)
  userType    String    @db.VarChar(20) // "student" o "landlord"
  isRevoked   Boolean   @default(false)
  expiresAt   DateTime
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relaciones
  student     Student?  @relation(...)
  landlord    Landlord? @relation(...)

  @@index([token])
  @@index([studentId])
  @@index([landlordId])
  @@index([expiresAt])
}
```

## 💻 Implementación en Frontend

### Interceptor para Manejo Automático de Refresh

```typescript
// axios-interceptor.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // IMPORTANTE: Enviar cookies
});

// Interceptor de respuesta para manejar tokens expirados
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Si el token expiró y no hemos intentado refrescar aún
    if (
      error.response?.status === 401 &&
      error.response?.data?.shouldRefresh &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Llamar al endpoint de refresh
        await api.post("/auth/refresh");

        // Reintentar el request original
        return api(originalRequest);
      } catch (refreshError) {
        // Si el refresh falla, redirigir a login
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

### Hook de Autenticación

```typescript
// hooks/useAuth.ts
import { useRouter } from "next/navigation";
import api from "@/lib/axios-interceptor";

export const useAuth = () => {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      router.push("/login");
    }
  };

  const refreshToken = async () => {
    try {
      const response = await api.post("/auth/refresh");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { login, logout, refreshToken };
};
```

### Uso en Componentes

```typescript
// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios-interceptor";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // El interceptor maneja automáticamente la renovación de tokens
        const response = await api.get("/api/properties");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{/* Tu UI */}</div>;
}
```

## ⚙️ Configuración de Variables de Entorno

### Backend (.env)

```env
# JWT Configuration
JWT_SECRET="kJ8#mN9$pQ2@wE5!rT7&yU1*iO3^aS6%dF4+gH0-lK9=xC2@vB5!nM8%zQ7*wE3&"
JWT_EXPIRES_IN="15m"  # Duración del access token

# Refresh Token Secret (opcional, por defecto usa JWT_SECRET)
REFRESH_TOKEN_SECRET="tu_secret_diferente_aqui" # Recomendado usar uno diferente

# Environment
NODE_ENV="development"  # "production" en producción
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
NEXT_PUBLIC_API_PROPERTIES_URL="http://localhost:3002"
```

## 🔧 Servicios Implementados

### `refresh-token.service.ts`

Funciones principales:

- `generateAccessToken(payload)`: Genera access token de 15 minutos
- `generateRefreshToken(userId, userType)`: Genera y almacena refresh token
- `verifyRefreshToken(token)`: Verifica validez del refresh token
- `revokeRefreshToken(token)`: Invalida un refresh token específico
- `revokeAllUserTokens(userId, userType)`: Invalida todos los tokens de un usuario
- `rotateRefreshToken(oldToken, userId, userType)`: Rota refresh token
- `cleanupExpiredTokens()`: Limpia tokens expirados (tarea de mantenimiento)

## 🛡️ Características de Seguridad

### 1. **Cookies httpOnly**

- Tokens almacenados en cookies httpOnly (no accesibles desde JavaScript)
- Protección contra ataques XSS

### 2. **Cookie Secure Flag**

- En producción, cookies solo se envían por HTTPS
- Protección contra ataques man-in-the-middle

### 3. **SameSite Policy**

- `sameSite: "lax"` en desarrollo
- Protección contra ataques CSRF

### 4. **Rotación de Refresh Tokens**

- Cada uso del refresh token genera uno nuevo
- El token anterior se revoca automáticamente
- Protección contra robo de refresh tokens

### 5. **Almacenamiento en Base de Datos**

- Todos los refresh tokens se almacenan en BD
- Permite invalidación inmediata
- Tracking de sesiones activas

### 6. **Tokens de Corta Duración**

- Access token de solo 15 minutos
- Minimiza ventana de exposición en caso de robo

### 7. **Validación Completa**

- Verificación de firma JWT
- Verificación en base de datos
- Verificación de estado de revocación
- Verificación de expiración

## 🧪 Pruebas

### Escenario 1: Login Exitoso

```bash
# Login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "estudiante@example.com",
    "password": "password123"
  }' \
  -c cookies.txt

# Verificar que se recibieron ambas cookies
cat cookies.txt | grep authToken
cat cookies.txt | grep refreshToken
```

### Escenario 2: Renovación de Token

```bash
# Esperar 16 minutos para que expire el access token

# Intentar acceder a un recurso protegido
curl -X GET http://localhost:3001/auth/me \
  -b cookies.txt

# Respuesta esperada: 401 con shouldRefresh: true

# Llamar al endpoint de refresh
curl -X POST http://localhost:3001/auth/refresh \
  -b cookies.txt \
  -c cookies.txt

# Respuesta esperada: 200 con nuevos tokens en cookies

# Reintentar acceso al recurso protegido
curl -X GET http://localhost:3001/auth/me \
  -b cookies.txt

# Respuesta esperada: 200 con datos del usuario
```

### Escenario 3: Logout

```bash
# Logout
curl -X POST http://localhost:3001/auth/logout \
  -b cookies.txt

# Verificar que las cookies fueron eliminadas
curl -X GET http://localhost:3001/auth/me \
  -b cookies.txt

# Respuesta esperada: 401 (No se proporcionó token)
```

## 📊 Monitoreo y Mantenimiento

### Tarea de Limpieza de Tokens Expirados

Recomendación: Ejecutar diariamente usando cron job o tarea programada

```typescript
// scripts/cleanup-tokens.ts
import { cleanupExpiredTokens } from "../services/shared/refresh-token.service";

async function runCleanup() {
  const deletedCount = await cleanupExpiredTokens();
  console.log(`🧹 Tokens expirados eliminados: ${deletedCount}`);
}

runCleanup();
```

### Consultas SQL Útiles

```sql
-- Ver tokens activos por usuario
SELECT userType, COUNT(*) as active_tokens
FROM RefreshToken
WHERE isRevoked = false AND expiresAt > NOW()
GROUP BY userType;

-- Ver tokens revocados
SELECT COUNT(*) as revoked_tokens
FROM RefreshToken
WHERE isRevoked = true;

-- Ver tokens por expirar en las próximas 24 horas
SELECT COUNT(*) as expiring_soon
FROM RefreshToken
WHERE expiresAt BETWEEN NOW() AND DATE_ADD(NOW(), INTERVAL 24 HOUR)
  AND isRevoked = false;
```

## ✅ Checklist de Implementación

- [x] Modelo RefreshToken en Prisma schema
- [x] Migración de base de datos ejecutada
- [x] Servicio de refresh tokens creado
- [x] Actualización de servicios de autenticación
- [x] Endpoint POST /auth/refresh implementado
- [x] Endpoint POST /auth/logout actualizado
- [x] Middleware de autenticación mejorado
- [x] Cookies configuradas correctamente
- [x] Rotación de tokens implementada
- [x] Documentación completa
- [ ] Implementación de interceptor en frontend
- [ ] Pruebas end-to-end
- [ ] Configuración de tarea de limpieza automática

## 🚀 Próximos Pasos Recomendados

1. **Frontend**: Implementar el interceptor de axios para manejo automático
2. **Monitoreo**: Configurar alerts para tokens sospechosos
3. **Limpieza**: Automatizar limpieza de tokens expirados
4. **Testing**: Agregar tests unitarios y de integración
5. **Rate Limiting**: Implementar rate limiting en endpoint de refresh
6. **Logging**: Agregar logging detallado de uso de tokens

## 📝 Notas Importantes

- Los refresh tokens se rotan en cada uso para mayor seguridad
- En producción, asegurarse de usar HTTPS y `secure: true` en cookies
- Considerar implementar un límite de refresh tokens activos por usuario
- Revisar periódicamente los logs de uso de refresh tokens

## 🤝 Soporte

Para preguntas o problemas con el sistema de refresh tokens, contactar al equipo de desarrollo.

---

**Última actualización**: Octubre 2025
**Versión**: 1.0.0
