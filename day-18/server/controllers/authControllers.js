import User from "../models/user.js";
import jwt from "jsonwebtoken";

/** @type {import('express').RequestHandler} */
export const registerUser = async (req, res) => {
  if (typeof req.body !== "object") {
    return res.status(400).json({ message: "Invalid format" });
  }

  const { firstName, lastName, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = new User({ firstName, lastName, email, password, role });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const loginUser = async (req, res) => {
  if (typeof req.body !== "object") {
    return res.status(400).json({ message: "Invalid format" });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const getAllUser = async (req, res) => {
  try {
    if (req.user?.role !== "job-poster") {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await User.find().select("-password").select("-__v");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .select("-__v");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const updateUser = async (req, res) => {
  if (typeof req.body !== "object") {
    return res.status(400).json({ message: "Invalid format" });
  }

  const {
    firstName,
    lastName,
    phone,
    location,
    skills,
    education,
    experience,
  } = req.body;

  try {
    if (req.user?.role !== "job-seeker") {
      return res
        .status(400)
        .json({ message: "Only job seekers can update profile" });
    }

    const user = await User.findByIdAndUpdate(req.user.id, {
      $set: {
        firstName,
        lastName,
        phone,
        location,
        skills,
        education,
        experience,
      },
    })
      .select("-password")
      .select("-__v");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/** @type {import('express').RequestHandler} */
export const logoutUser = async (req, res) => {
  try {
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
