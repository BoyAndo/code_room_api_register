#!/bin/bash

echo "⏳ Esperando que MinIO esté listo..."
sleep 5

echo "🔧 Configurando alias de MinIO..."
docker exec code-room-minio mc alias set myminio http://localhost:9000 minioadmin minioadmin123

echo "📁 Creando bucket 'certificados'..."
docker exec code-room-minio mc mb myminio/certificados --ignore-existing

echo "🌍 Configurando bucket como público..."
docker exec code-room-minio mc anonymous set public myminio/certificados

echo "✅ Verificando configuración..."
docker exec code-room-minio mc anonymous get myminio/certificados

echo "🎉 MinIO configurado correctamente!"
echo "📄 URLs de archivos serán: http://localhost:9000/certificados/nombre-archivo.pdf"
