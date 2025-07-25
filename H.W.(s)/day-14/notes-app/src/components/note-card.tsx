import { Link } from "react-router";
import { useNotesActions } from "../store/notesStore";

type Props = Note & {};

export default function NoteCard({ id, title, content }: Props) {
  const { removeNote } = useNotesActions();

  return (
    <div className="group relative rounded-2xl bg-white px-5 py-4 shadow">
      <h2 className="mb-2 line-clamp-1 text-2xl font-semibold">{title}</h2>
      <p className="line-clamp-2 text-gray-600">{content ?? "No content"}</p>

      <div className="absolute top-3 right-4 hidden bg-white pb-1.5 group-hover:block">
        <Link to={`/edit/${id}`}>
          <button className="cursor-pointer rounded-full p-2 hover:bg-neutral-200">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="size-3"
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
                  d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z"
                  fill="#000000"
                ></path>
                <path
                  d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
        </Link>

        <button
          className="cursor-pointer rounded-full p-2 hover:bg-neutral-200"
          onClick={() => removeNote(id)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="size-4"
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
                d="M10 12V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 12V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 7H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
