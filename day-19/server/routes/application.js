import express from "express";
import {
  applyToJob,
  getMyApplications,
} from "../controllers/applicationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getMyApplications);
router.post("/:jobId", authMiddleware, applyToJob);

export default router;
