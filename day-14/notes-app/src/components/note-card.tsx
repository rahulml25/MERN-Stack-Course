import { Link } from "react-router";

type Props = {
  id: string;
  title: string;
  content: string;
};

export default function NoteCard({ id, title, content }: Props) {
  return (
    <div className="relative rounded-2xl bg-white px-5 py-4 shadow">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <p className="line-clamp-2 text-gray-600">{content ?? "No content"}</p>

      <div className="absolute top-3 right-4">
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
      </div>
    </div>
  );
}
