import axios from "axios";
import Navbar from "../components/Navbar";
import { useForm, type FieldValues } from "react-hook-form";

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log("🔐 Login Data:", data);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        "http://localhost:3000/api/auth/update",
        data,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log(res.data);
    } catch (error: any) {
      console.log("Error:", error.response?.data || error.message);
    }
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex grow items-center justify-center bg-blue-50">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-bold text-blue-600">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Phone"
              {...register("phone", { required: true })}
              className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">Phone is required</p>
            )}

            <input
              type="text"
              placeholder="Location"
              {...register("location", { required: true })}
              className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
            />
            {errors.location && (
              <p className="text-sm text-red-500">Location is required</p>
            )}

            <input
              type="text"
              placeholder="Experience"
              {...register("experience", { required: true })}
              className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
            />
            {errors.experience && (
              <p className="text-sm text-red-500">Experience is required</p>
            )}

            <input
              type="text"
              placeholder="Education"
              {...register("education", { required: true })}
              className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
            />
            {errors.education && (
              <p className="text-sm text-red-500">Education is required</p>
            )}

            {/* <input
            type="text"
            placeholder="Skills (comma separated)"
            {...register("skills", { required: true })}
            className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500">Skills are required</p>
          )} */}

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-2 text-white transition hover:bg-blue-700"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
