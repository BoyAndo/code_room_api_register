import express from "express";
import { registerUser } from "../../controllers/registerController";
import { loginController } from "../../controllers/loginController";
import { upload } from "../../middlewares/multer";

const router = express.Router();

router.post("/login", loginController);

router.post("/register", upload.single("studentCertificateUrl"), registerUser);

export default router;
