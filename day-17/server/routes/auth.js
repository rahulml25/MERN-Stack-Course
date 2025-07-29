import express from "express";
import {
  getAllUser,
  loginUser,
  registerUser,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/all-users", getAllUser);

export default router;
