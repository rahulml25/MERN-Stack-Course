import axios from "axios";
import { useNavigate } from "react-router";
import type { FieldValues } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobEditor from "../components/JobEditor";

export default function CreateJob() {
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log("🔐 Job Data:", data);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/jobs",
        {
          ...data,
          skillsRequired: data.skillsRequired
            .split(",")
            .map((skill: string) => skill.trim()),
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("✅ Job created successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("❌ Job creation failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex grow flex-col items-center justify-center bg-blue-50 py-10">
        <JobEditor title="Create Job" onSubmit={onSubmit} />
      </div>

      <Footer />
    </div>
  );
}
