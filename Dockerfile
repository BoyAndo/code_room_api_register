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

ENV PORT=3001

# Comando de inicio
CMD ["npx", "tsx", "src/server.ts"]
