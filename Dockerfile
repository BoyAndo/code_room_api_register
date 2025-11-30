# ========================================
# STAGE 1: Dependencies
# ========================================
FROM node:20-alpine AS deps

# Instalar libc6-compat para compatibilidad
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# ========================================
# STAGE 2: Builder
# ========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias necesarias para compilación
RUN apk add --no-cache libc6-compat python3 make g++


# Copiar dependencias instaladas (asegura que node_modules exista en builder)
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# ========================================
# STAGE 3: Runner (Producción)
# ========================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Instalar dependencias de runtime necesarias para Tesseract y Sharp
RUN apk add --no-cache \
    libc6-compat \
    vips-dev \
    poppler-utils \
    tesseract-ocr \
    tesseract-ocr-data-spa

# Crear usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressjs


# Copiar node_modules y código fuente generado
COPY --from=builder --chown=expressjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=expressjs:nodejs /app/src ./src
COPY --from=builder --chown=expressjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=expressjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=expressjs:nodejs /app/tsconfig.json ./tsconfig.json

# Copiar archivos adicionales necesarios
COPY --from=builder --chown=expressjs:nodejs /app/spa.traineddata ./spa.traineddata

# Crear directorios para uploads temporales
RUN mkdir -p /tmp/uploads && chown -R expressjs:nodejs /tmp/uploads

# Cambiar a usuario no-root
USER expressjs

# Exponer puerto
EXPOSE 3001


# Variables de entorno requeridas para producción
ENV PORT=3001 \
    DATABASE_URL="mysql://root:howlin404@uroom.cgt0cmaispf3.us-east-1.rds.amazonaws.com:3306/code_room" \
    MYSQL_USER="root" \
    MYSQL_PASSWORD="" \
    MYSQL_DB="code_room" \
    JWT_SECRET="kJ8#mN9$pQ2@wE5!rT7&yU1*iO3^aS6%dF4+gH0-lK9=xC2@vB5!nM8%zQ7*wE3&" \
    JWT_EXPIRES_IN=120h \
    MINIO_ENDPOINT=uroom_api_storage.gabogrobier.dev \
    MINIO_PORT=443 \
    MINIO_USE_SSL=true \
    MINIO_ACCESS_KEY=minioadmin \
    MINIO_SECRET_KEY=minioadmin123 \
    MINIO_PUBLIC_URL=https://uroom_api_storage.gabogrobier.dev \
    URL_S3_CARNETS=https://uroom_api_storage.gabogrobier.dev/carnets/ \
    PYTHON_SERVICE_URL=http://100.24.130.132:8002 \
    URL_S3_CERTIFICADOS=https://uroom_api_storage.gabogrobier.dev/certificados/

# Comando de inicio
CMD ["npx", "tsx", "src/server.ts"]
