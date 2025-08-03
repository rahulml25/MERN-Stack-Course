import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useForm, type FieldValues } from "react-hook-form";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log("📦 Register data:", data);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
      );
      console.log("✅ Registration successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("❌ Registration failed:", (error as any).response);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">First name is required</p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">Last name is required</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500">Email is required</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
          />
          {errors.password && (
            <p className="text-sm text-red-500">Password is required</p>
          )}

          <select
            {...register("role", { required: true })}
            className="w-full rounded-xl border px-4 py-2 focus:border-blue-400 focus:ring focus:outline-none"
          >
            <option value="">Select Role</option>
            <option value="job-seeker">Job Seeker</option>
            <option value="job-poster">Job Poster</option>
          </select>
          {errors.role && (
            <p className="text-sm text-red-500">Role is required</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
