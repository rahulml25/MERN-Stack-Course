import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/job.js";
import applicationRoutes from "./routes/application.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routers
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.use("/", (_, res) => res.send("Hello world!"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected.");
    app.listen(port, () =>
      console.log(`🚀 Server running on http://localhost:${port}`)
    );
  })
  .catch(console.error);
