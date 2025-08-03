import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import axios from "axios";
import type { FieldValues } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobEditor from "../components/JobEditor";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/created-jobs");
    return null;
  }

  const [job, setJob] = useState<Job>();

  useEffect(() => {
    const fetchJob = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:3000/api/jobs/${id}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setJob(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch job:", error);
      }
    };

    fetchJob();
  }, [id]);

  const onSubmit = async (data: FieldValues) => {
    console.log("🔐 Job Data:", data);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:3000/api/jobs/${id}`,
        {
          ...data,
          skillsRequired: data.skillsRequired
            .split(",")
            .map((skill: string) => skill.trim()),
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("✅ Job created successfully:", response.data);
      navigate("/created-jobs");
    } catch (error) {
      console.error("❌ Job creation failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex grow flex-col items-center justify-center bg-blue-50 py-10">
        <JobEditor title="Update Job" job={job} onSubmit={onSubmit} />
      </div>

      <Footer />
    </div>
  );
}
