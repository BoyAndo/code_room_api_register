import { Request, Response } from "express";
import { getCurrentUser } from "../middlewares/auth.middleware";

export const getMeController = async (req: Request, res: Response) => {
  try {
    const user = getCurrentUser(req);

    return res.status(200).json({
      success: true,
      user: user,
      message: "Usuario obtenido exitosamente",
    });
  } catch (error) {
    console.error("Error getting current user:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};
export const logoutController = async (req: Request, res: Response) => {
  try {
    // Clear the authentication cookie
    res.clearCookie("authToken", {
      httpOnly: true,
      secure: false, // false for development, should be true in production
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logout exitoso",
    });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};
