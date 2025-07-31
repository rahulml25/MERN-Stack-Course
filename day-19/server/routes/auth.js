import express from "express";
import {
  getAllUser,
  getUserById,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/authControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authMiddleware, getAllUser);
router.get("/users/:id", authMiddleware, getUserById);
router.put("/update", authMiddleware, updateUser);
router.post("/logout", authMiddleware, logoutUser);

export default router;
