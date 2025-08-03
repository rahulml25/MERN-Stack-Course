import { useForm, type FieldValues } from "react-hook-form";

type Props = {
  title: string;
  job?: Job;
  onSubmit: (data: FieldValues) => void;
};

export default function JobEditor({ title, job, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: { ...job, skillsRequired: job?.skillsRequired.join(", ") },
  });

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
      <h1 className="mb-10 text-center text-3xl font-bold text-blue-500">
        {title}
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Job Title"
          defaultValue={job?.jobTitle}
          {...register("jobTitle")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        />
        {errors.jobTitle && (
          <p className="text-sm text-red-500">Job Title is required</p>
        )}

        <input
          type="text"
          placeholder="Company Name"
          defaultValue={job?.company}
          {...register("company")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        />
        {errors.company && (
          <p className="text-sm text-red-500">Company Name is required</p>
        )}

        <textarea
          placeholder="Job Description"
          defaultValue={job?.description}
          {...register("description")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        />
        {errors.description && (
          <p className="text-sm text-red-500">Job Description is required</p>
        )}

        <select
          {...register("jobType")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full Time</option>
          <option value="Part-time">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
        </select>
        {errors.jobType && (
          <p className="text-sm text-red-500">Job Type is required</p>
        )}

        <input
          type="text"
          placeholder="Location"
          defaultValue={job?.location}
          {...register("location")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        />
        {errors.location && (
          <p className="text-sm text-red-500">Location is required</p>
        )}

        <input
          type="text"
          placeholder="Salary Range"
          defaultValue={job?.salaryRange}
          {...register("salaryRange")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        />
        {errors.salaryRange && (
          <p className="text-sm text-red-500">Salary Range is required</p>
        )}

        <input
          type="text"
          placeholder="Skills Required (Comma Separated)"
          defaultValue={job?.skillsRequired.join(", ")}
          {...register("skillsRequired")}
          className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
        />
        {errors.skillsRequired && (
          <p className="text-sm text-red-500">Skills Required is required</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
