import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Newspaper } from "lucide-react";
import { jwtDecode } from "jwt-decode";

type IJob = Job & { applied?: boolean };

export default function AllJobs() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [jobList, setJobList] = useState<IJob[]>([]);
  const { id, role } = jwtDecode(token || "") as Payload;

  const fetchAvailableJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobList(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch jobs:", error);
    }
  };

  const fetchIfProfileUpdated = async () => {
    if (role !== "job-seeker") return;
    try {
      const response = await axios.get(
        `http://localhost:3000/api/auth/users/${id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const user = response.data;
      if (
        !user.phone?.length ||
        !user.location?.length ||
        !user.skills?.length ||
        !user.education?.length ||
        !user.experience?.length
      ) {
        console.log("⚠️ Profile is incomplete. Redirecting to profile update.");
        return navigate("/profile");
      }

      // Handle profile update logic here
    } catch (error) {
      console.error("❌ Failed to fetch profile:", error);
    }
  };

  const applyToJob = async (jobId: string) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/applications/${jobId}`,
        undefined,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      fetchAvailableJobs();
      console.log("✅ Job applied successfully:", response.data);
    } catch (error) {
      console.error("❌ Failed to apply to job:", error);
    }
  };

  useEffect(() => {
    fetchIfProfileUpdated();
    fetchAvailableJobs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <Navbar />

      <div className="container mx-auto grow px-5 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Available Jobs</h1>
        <p className="mt-2 text-gray-600">
          Here you can view the jobs that are currently available.
        </p>

        <div
          className={[
            "mt-6",
            jobList.length > 0
              ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "flex h-64 items-center justify-center",
          ].join(" ")}
        >
          {jobList.length > 0 ? (
            jobList.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                applyToJob={
                  role === "job-seeker" ? () => applyToJob(job._id) : undefined
                }
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-gray-500">No jobs available yet.</p>

              {role === "job-poster" && (
                <Link to="/create-job">
                  <button className="mt-4 cursor-pointer rounded-xl bg-blue-600 px-6 py-2 font-medium text-white">
                    Create Job
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const JobCard = ({ job, applyToJob }: { job: IJob; applyToJob?(): void }) => (
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

    {applyToJob && (
      <button
        className={[
          "mt-4 flex w-full cursor-pointer items-center justify-center space-x-3 rounded-md px-5 py-2 font-medium text-white",
          !job.applied
            ? "bg-green-500 transition-colors hover:bg-green-600"
            : "bg-gray-500",
        ].join(" ")}
        disabled={job.applied}
        onClick={applyToJob}
      >
        <span>{job.applied ? "Applied" : "Apply Now"}</span>
        <Newspaper className="size-5" />
      </button>
    )}
  </div>
);
