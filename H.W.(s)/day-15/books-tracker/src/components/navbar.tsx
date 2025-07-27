import { Link } from "react-router";
import { BookPlus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky flex items-center justify-between border-b border-neutral-400/70 bg-black/5 px-6 py-2.5 backdrop-blur-md sm:px-10">
      <Link to="/" className="flex items-center space-x-4">
        <img src="/logo.svg" alt="Logo" className="size-8" />
        <span className="text-lg font-medium text-blue-600 text-shadow-sm">
          Books Tracker
        </span>
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/books" className="font-medium">
          Books
        </Link>
        <Link to="/add">
          <button className="flex cursor-pointer items-center space-x-2 rounded-full bg-blue-500 px-4 py-1.5 text-sm text-white shadow-md transition-colors hover:bg-blue-500/90">
            <BookPlus className="size-4" />
            <span>Add book</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
