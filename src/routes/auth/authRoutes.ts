import express from "express";
import { registerStudent } from "../../controllers/studentController";
import { registerLandlord } from "../../controllers/landlordController";
import { loginController } from "../../controllers/loginController";
import { upload } from "../../middlewares/multer";

const router = express.Router();

router.post("/login", loginController);

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

export default router;
