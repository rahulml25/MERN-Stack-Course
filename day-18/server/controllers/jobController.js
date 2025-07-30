import Job from "../models/job.js";

/** @type {import('express').RequestHandler} */
export const createJob = async (req, res) => {
  if (typeof req.body !== "object") {
    return res.status(400).json({ message: "Invalid format" });
  }

  const {
    jobTitle,
    company,
    location,
    description,
    skillsRequired,
    salaryRange,
    jobType,
  } = req.body;

  try {
    if (req.user?.role !== "job-poster") {
      return res
        .status(400)
        .json({ message: "Only job posters can create jobs" });
    }

    const job = new Job({
      jobTitle,
      company,
      location,
      description,
      skillsRequired,
      salaryRange,
      jobType,
      poster: req.user._id,
    });
    await job.save();

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().select("-__v").sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).select("-__v");
    if (!job) {
      return res.status(400).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const getJobByPoster = async (req, res) => {
  try {
    const jobs = await Job.find({ poster: req.user.id })
      .select("-__v")
      .sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const updateJobById = async (req, res) => {
  if (typeof req.body !== "object") {
    return res.status(400).json({ message: "Invalid format" });
  }

  const {
    jobTitle,
    company,
    location,
    description,
    skillsRequired,
    salaryRange,
    jobType,
  } = req.body;

  try {
    if (req.user?.role !== "job-poster") {
      return res
        .status(400)
        .json({ message: "Only job posters can update jobs" });
    }

    let job = await Job.findOneAndUpdate(
      { _id: req.params.id, poster: req.user.id },
      {
        jobTitle,
        company,
        location,
        description,
        skillsRequired,
        salaryRange,
        jobType,
      }
    );
    if (!job) {
      return res.status(400).json({ message: "Job not found" });
    }
    job = await Job.findById(job.id).select("-__V");
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const deleteJobById = async (req, res) => {
  try {
    await Job.findOneAndDelete({
      _id: req.params.id,
      poster: req.user.id,
    }).select("-__v");

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
