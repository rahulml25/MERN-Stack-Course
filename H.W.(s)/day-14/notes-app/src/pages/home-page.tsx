import { Link } from "react-router";
import MainAppContainer from "../containers/main-app-container";

export default function HomePage() {
  return (
    <MainAppContainer className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <img src="/logo.svg" alt="Logo" className="mb-3 size-12" />
        <h1 className="mb-4 text-2xl font-bold">Welcome to Notes App</h1>
        <p className="mb-8 max-w-lg text-center text-gray-700">
          Quickly create, edit, and manage your notes - all in one place.
          Simple, fast and stored in your browser.
        </p>

        <Link to="/notes">
          <button className="cursor-pointer rounded bg-blue-600 px-4 py-2 font-semibold text-white">
            View My Notes
          </button>
        </Link>
      </div>
    </MainAppContainer>
  );
}
