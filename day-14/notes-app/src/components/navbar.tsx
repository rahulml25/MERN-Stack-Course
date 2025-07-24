import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between space-x-4 rounded-b bg-blue-600 px-5 py-3 text-white">
      <Link to="/" className="flex items-center space-x-4">
        <img src="/logo.svg" alt="Logo" className="size-6" />
        <span className="font-medium">NotesApp</span>
      </Link>
      <div className="flex items-center space-x-4 font-medium">
        <Link to="/notes">Notes</Link>
        <Link to="/new">Create New</Link>
      </div>
    </header>
  );
}
