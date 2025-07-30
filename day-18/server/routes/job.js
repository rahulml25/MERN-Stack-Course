import express from "express";
import {
  createJob,
  deleteJobById,
  getAllJobs,
  getJobById,
  getJobByPoster,
  updateJobById,
} from "../controllers/jobController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createJob);
router.get("/", authMiddleware, getAllJobs);
router.get("/poster", authMiddleware, getJobByPoster);
router.get("/:id", authMiddleware, getJobById);
router.put("/:id", authMiddleware, updateJobById);
router.delete("/:id", authMiddleware, deleteJobById);

export default router;
