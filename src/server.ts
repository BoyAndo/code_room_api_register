import app from "./app";

const PORT = process.env.PORT || 3001; // ← Valor por defecto

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/auth/login`);
});