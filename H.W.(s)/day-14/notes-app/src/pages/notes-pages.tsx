import { Link } from "react-router";
import { useNotes } from "../store/notesStore";

import NoteCard from "../components/note-card";
import MainAppContainer from "../containers/main-app-container";

export default function NotesPage() {
  const notes = useNotes();

  return (
    <MainAppContainer className="flex flex-col">
      <h1 className="mb-4 w-fit border-b-2 px-2 pt-2 pb-1 text-3xl font-semibold">
        Notes
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {notes.map(({ id, title, content }) => (
          <NoteCard key={id} id={id} title={title} content={content} />
        ))}
      </div>

      {!notes.length && (
        <div className="mb-4 flex grow flex-col items-center justify-center">
          <p className="mb-6 text-xl font-medium text-neutral-500">
            Notes not created yet!
          </p>
          <Link to="/new">
            <button className="flex cursor-pointer items-center space-x-1 rounded bg-blue-600 px-4 py-2 font-semibold text-white">
              <span>Create One</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6 12H18M12 6V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </Link>
        </div>
      )}
    </MainAppContainer>
  );
}
