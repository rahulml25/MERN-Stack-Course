import axios from "axios";
import { Link } from "react-router";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Pencil, Trash2 } from "lucide-react";

export default function CreatedJobs() {
  const [createdJobs, setCreatedJobs] = useState<Job[]>([]);

  const deleteJob = async (jobId: string) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:3000/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCreatedJobs(createdJobs.filter((job) => job._id !== jobId));
      console.log("✅ Job deleted successfully");
    } catch (error) {
      console.error("❌ Failed to delete job:", error);
    }
  };

  useEffect(() => {
    const fetchCreatedJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/jobs/created",
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setCreatedJobs(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch created jobs:", error);
      }
    };

    fetchCreatedJobs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <Navbar />

      <div className="container mx-auto grow px-5 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Created Jobs</h1>
        <p className="mt-2 text-gray-600">
          Here you can view the jobs you have created.
        </p>

        <div
          className={[
            "mt-6",
            createdJobs.length > 0
              ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "flex h-64 items-center justify-center",
          ].join(" ")}
        >
          {createdJobs.length > 0 ? (
            createdJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                deleteJob={() => deleteJob(job._id)}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-gray-500">No jobs created yet.</p>
              <Link to="/create-job">
                <button className="mt-4 cursor-pointer rounded-xl bg-blue-600 px-6 py-2 font-medium text-white">
                  Create Job
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const JobCard = ({ job, deleteJob }: { job: Job; deleteJob(): void }) => (
  <div
    key={job._id}
    className="relative rounded-lg bg-white p-4 shadow transition hover:shadow-lg"
  >
    <div className="space-y-2">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{job.jobTitle}</h2>
        <p className="mt-2 text-gray-600">{job.description}</p>
      </div>

      <div className="space-y-1">
        <p className="text-gray-500">
          <strong>Company:</strong> {job.company}
        </p>
        <p className="text-gray-500">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-gray-500">
          <strong>Salary Range:</strong> {job.salaryRange}
        </p>
        <p className="text-gray-500">
          <strong>Skills Required:</strong> {job.skillsRequired.join(", ")}
        </p>
        <p className="text-gray-500">
          <strong>Job Type:</strong> {job.jobType}
        </p>
      </div>
    </div>

    <div className="absolute top-2 right-2 space-x-1 text-sm text-gray-500">
      <Link to={`/edit-job/${job._id}`}>
        <button className="cursor-pointer rounded-full p-2 font-medium text-blue-600 transition-colors hover:bg-neutral-100">
          <Pencil className="size-3.5" />
        </button>
      </Link>
      <button
        className="cursor-pointer rounded-full p-2 font-medium text-red-600 transition-colors hover:bg-neutral-100"
        onClick={deleteJob}
      >
        <Trash2 className="size-3.5" />
      </button>
    </div>
  </div>
);
