import express from "express";
import { getAllStudents } from "../../controllers/studentController";
import {
  verifyToken,
  requireLandlord,
} from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/student", verifyToken, requireLandlord, getAllStudents);

export default router;
