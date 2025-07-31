import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const token = localStorage.getItem("token");
  let role = null;

  if (token) {
    try {
      const decoded = jwtDecode<Payload>(token);
      role = decoded.role;
    } catch (err: any) {
      console.error("Invalid token:", err.message);
    }
  }

  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <Link to="/" className="text-xl font-bold">
        Job Portal
      </Link>

      <div className="flex items-center space-x-4">
        {role === "job-poster" && (
          <Link to="/create-job" className="hover:underline">
            Create Job
          </Link>
        )}
        {role === "job-seeker" && (
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        )}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="rounded-md bg-white px-3 py-1 text-blue-600 hover:cursor-pointer hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
