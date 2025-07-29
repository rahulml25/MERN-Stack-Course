import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    location: String,
    description: String,
    skillsRequired: {
      type: [String],
      require: true,
    },
    salaryRange: String,
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Remote"],
      require: true,
    },
    poster: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Job ?? mongoose.model("Job", jobSchema);
