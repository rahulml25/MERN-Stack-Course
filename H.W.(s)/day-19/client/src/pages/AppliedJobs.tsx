import axios from "axios";
import { Link } from "react-router";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/applications",
          { headers: { Authorization: `Bearer ${token}` } },
        );
        console.log("✅ Fetched applied jobs:", response.data);
        setAppliedJobs(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch applied jobs:", error);
      }
    };

    fetchAppliedJobs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <Navbar />

      <div className="container mx-auto grow px-5 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Applied Jobs</h1>
        <p className="mt-2 text-gray-600">
          Here you can view the jobs you have applied for.
        </p>

        <div
          className={[
            "mt-6",
            appliedJobs.length > 0
              ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "flex h-64 items-center justify-center",
          ].join(" ")}
        >
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-gray-500">No jobs applied yet.</p>
              <Link to="/jobs">
                <button className="mt-4 cursor-pointer rounded-xl bg-blue-600 px-6 py-2 font-medium text-white">
                  Explore Jobs
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

const JobCard = ({ job }: { job: Job }) => (
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
  </div>
);
