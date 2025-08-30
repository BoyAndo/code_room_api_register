import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"; // ← Importa cors
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth/authRoutes";
import csurf from "csurf";

const app = express();

// Configura CORS
app.use(cors({
  origin: "http://localhost:3000", // URL de tu frontend
  credentials: true, // Permite cookies
}));

app.use(express.json());
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use("/auth", authRoutes);

console.log("Starting server...");

export default app;