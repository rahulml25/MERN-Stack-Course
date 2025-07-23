import React, { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState(() => ({ password: "" }));

  const checkPasswordStrength = (/** @type {string} */ password) => {
    // uppercase
    if (!/^(\S)*[A-Z](\S)*$/.test(password)) {
      return setError({
        password: "Must contain at least one uppercase character.",
      });
    }

    // lowercase
    if (!/^(\S)*[a-z](\S)*$/.test(password)) {
      return setError({
        password: "Must contain at least one lowercase character.",
      });
    }

    // numbers
    if (!/^(\S)*[0-9](\S)*$/.test(password)) {
      return setError({
        password: "Must contain at least one number.",
      });
    }

    // symbols
    if (!/^(\S)*[^a-zA-Z0-9\s](\S)*$/.test(password)) {
      return setError({
        password: "Must contain at least one special character.",
      });
    }

    // length
    if (password.length < 8) {
      return setError({
        password: "Must be at least 8 characters.",
      });
    }

    return true;
  };

  const onSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ e) => {
    e.preventDefault();

    setMessage("");
    setError({ password: "" });
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (checkPasswordStrength(data.password)) {
      setLoading(true);
      const id = setTimeout(() => {
        setLoading(false);
        setMessage("Sign up attempt successful.");
        clearTimeout(id);
      }, 3000);
    }
  };

  return (
    <main className="flex h-dvh items-center justify-center bg-neutral-100">
      <div className="w-sm rounded-2xl bg-white px-11 py-8 pb-10 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Sign Up</h1>

        {message && <p className="text-center text-green-500">{message}</p>}

        <form onSubmit={onSubmit} className="grid gap-3.5">
          <div className="grid">
            <label
              htmlFor="name"
              className="w-fit translate-x-2 translate-y-2 bg-white px-0.5 text-xs font-medium text-blue-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded border px-3 py-1.5 outline-none"
              placeholder="Your name"
              minLength="3"
              required
            />
          </div>
          <div className="grid">
            <label
              htmlFor="email"
              className="w-fit translate-x-2 translate-y-2 bg-white px-0.5 text-xs font-medium text-blue-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded border px-3 py-1.5 outline-none"
              placeholder="i.e. john@example.com"
              required
            />
          </div>
          <div className="grid">
            <label
              htmlFor="password"
              className="w-fit translate-x-2 translate-y-2 bg-white px-0.5 text-xs font-medium text-blue-500"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={!showPassword ? "password" : "text"}
              className="rounded border px-3 py-1.5 outline-none"
              placeholder="xxxxxxxx..."
              required
            />
            {!!error.password && (
              <p className="mt-1.5 pl-1 text-sm text-red-500">
                {error.password}
              </p>
            )}

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="show-password"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="show-password" className="text-sm font-medium">
                Show password
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            onClick={() => setMessage("")}
            className="mx-auto mt-4 flex cursor-pointer items-center space-x-4 rounded-md bg-blue-600 px-6 py-1.5 font-semibold text-white transition-colors hover:bg-blue-600/90 disabled:bg-blue-600/80"
          >
            <span>Sign Up</span>
            {loading && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M15 8a7.002 7.002 0 00-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
