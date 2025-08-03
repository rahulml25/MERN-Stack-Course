import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useForm, type FieldValues } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log("🔐 Login Data:", data);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
      );
      console.log("✅ Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("❌ Login failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
