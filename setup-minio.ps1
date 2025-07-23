# Script para configurar MinIO en Windows
Write-Host "⏳ Esperando que MinIO esté listo..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

Write-Host "🔧 Configurando alias de MinIO..." -ForegroundColor Green
docker exec code-room-minio mc alias set myminio http://localhost:9000 minioadmin minioadmin123

Write-Host "📁 Creando bucket 'certificados'..." -ForegroundColor Green
docker exec code-room-minio mc mb myminio/certificados --ignore-existing

Write-Host "🌍 Configurando bucket como público..." -ForegroundColor Green
docker exec code-room-minio mc anonymous set public myminio/certificados

Write-Host "✅ Verificando configuración..." -ForegroundColor Green
docker exec code-room-minio mc anonymous get myminio/certificados

Write-Host "🎉 MinIO configurado correctamente!" -ForegroundColor Cyan
Write-Host "📄 URLs de archivos serán: http://localhost:9000/certificados/nombre-archivo.pdf" -ForegroundColor White
