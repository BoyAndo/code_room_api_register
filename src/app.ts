import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth/authRoutes";
import userRoutes from "./routes/user/userRoutes";
import locationRoutes from "./routes/location/locationRoutes";
import profileRoutes from "./routes/profile/profileRoutes";

const app = express();

// ✅ CORS configurado para el dominio HTTPS del frontend
app.use(
  cors({
    origin: "https://uroom-frontend.gabogrobier.dev", // ✅ Subdominio HTTPS del frontend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Origin",
      "Accept",
    ],
    exposedHeaders: ["set-cookie"],
  })
);

// ✅ Middlewares básicos
app.use(express.json());
app.use(cookieParser()); // ← Importante: Agregar cookie-parser

// ✅ Rutas
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/locations", locationRoutes);
app.use("/profile", profileRoutes);

console.log("Starting server...");

export default app;
