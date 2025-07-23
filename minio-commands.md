# Comandos Docker para MinIO

# Iniciar MinIO

docker-compose up -d

# Parar MinIO

docker-compose down

# Ver logs de MinIO

docker-compose logs minio

# Reiniciar MinIO

docker-compose restart minio

# Ver estado de los contenedores

docker ps

# Eliminar todo (contenedor + volumen)

docker-compose down -v

# Acceso a la consola web

# URL: http://localhost:9001

# Usuario: minioadmin

# Contraseña: minioadmin123

# URLs importantes:

# API MinIO: http://localhost:9000

# Consola Web: http://localhost:9001

# Bucket certificados: http://localhost:9000/certificados/
