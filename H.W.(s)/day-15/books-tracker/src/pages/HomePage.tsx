import { Link } from "react-router";
import MainAppContainer from "../containers/main-app-container";

export default function HomePage() {
  return (
    <MainAppContainer className="flex flex-col justify-center">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        <h1 className="mb-3 text-3xl font-bold">Welcome to Book Tracker</h1>
        <p className="mb-5 text-center text-neutral-700">
          Stay organized, motivated, and never lose track of the books you love
          — your personal reading journey, always saved and just a click away.
        </p>

        <Link to="/books">
          <button className="cursor-pointer rounded-full bg-blue-600 px-5 py-1.5 font-medium text-white">
            Visit Books
          </button>
        </Link>
      </div>
    </MainAppContainer>
  );
}
