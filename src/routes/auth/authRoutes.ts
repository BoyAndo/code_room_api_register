import express, { Request } from "express";
import { registerStudent } from "../../controllers/studentController";
import { registerLandlord } from "../../controllers/landlordController";
import { loginController } from "../../controllers/loginController";
import { upload } from "../../middlewares/multer";
import { getLandlords } from "../../controllers/landlordController";
import { authenticateToken } from "../../middlewares/authMiddleware";

const router = express.Router();


// Endpoint para logout: borra la cookie authToken
router.post("/logout", (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    sameSite: "strict"
  });
  res.json({ success: true, message: "Sesión cerrada" });
});

// Extiende la interfaz Request para incluir la propiedad 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// Endpoint para obtener el usuario autenticado
router.get("/me", authenticateToken, (req, res) => {
  // Devuelve los datos del usuario autenticado
  res.json({ success: true, user: req.user });
});

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

router.get("/landlords", getLandlords);

router.get("/health", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Auth API is working!",
    timestamp: new Date().toISOString()
  });
});

router.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

export default router;
