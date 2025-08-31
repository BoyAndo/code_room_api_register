import express from "express";
import { registerStudent } from "../../controllers/studentController";
import { registerLandlord } from "../../controllers/landlordController";
import { loginController } from "../../controllers/loginController";
import {
  getMeController,
  logoutController,
} from "../../controllers/authController";
import { upload } from "../../middlewares/multer";
import { getLandlords } from "../../controllers/landlordController";
import { verifyToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/login", loginController);
router.get("/me", verifyToken, getMeController);
router.post("/logout", logoutController);

router.post(
  "/students-register",
  upload.single("studentCertificateUrl"),
  registerStudent
);

router.post(
  "/landlords-register",
  upload.single("landlordCarnet"),
  registerLandlord
);

router.get("/landlords", getLandlords);

export default router;
