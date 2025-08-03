type Payload = {
  id: string;
  role: "job-seeker" | "job-poster";
};

type Job = {
  _id: string;
  jobTitle: string;
  description: string;
  jobType: string;
  location: string;
  company: string;
  salaryRange: string;
  skillsRequired: string[];
};
