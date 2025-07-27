import { loadBooks } from "../utils/localStorage";

import { Link } from "react-router";
import BookCard from "../components/book-card";
import MainAppContainer from "../containers/main-app-container";

export default function BooksPage() {
  const books = loadBooks();

  return (
    <MainAppContainer className="flex flex-col">
      <div className="mb-3 space-y-1 py-2">
        <h1 className="text-3xl font-bold text-neutral-800">Track Books</h1>
        <p className="text-neutral-700">
          A simple way to log, manage, and revisit your reading list.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            status={book.status}
          />
        ))}
      </div>

      {!books.length && (
        <div className="mb-4 flex grow flex-col items-center justify-center space-y-3">
          <p className="text-xl font-medium text-neutral-500">
            Books not added yet!
          </p>
          <Link to="/add">
            <button className="flex cursor-pointer items-center space-x-1 rounded-full bg-blue-600 px-5 py-1.5 font-semibold text-white">
              <span>Add One</span>
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
