import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from "./routes/auth/authRoutes";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

console.log("Starting server...");

export default app;
