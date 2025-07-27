import NotFoundPage from "./NotFoundPage";
import BookEditor from "../components/book-editor";
import MainAppContainer from "../containers/main-app-container";

import { useNavigate, useParams } from "react-router";
import { loadBooks, saveBooks } from "../utils/localStorage";

export default function ViewBookPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  if (!id) return <NotFoundPage />;

  const book = loadBooks().find((book) => book.id === id);
  if (!book) return <NotFoundPage />;

  const onSave = (updatedBook: Book) => {
    const updatedBooks = loadBooks().map((book) =>
      book.id === updatedBook.id ? updatedBook : book,
    );
    saveBooks(updatedBooks);
    navigate("/books");
  };

  const onDelete = (bookId: string) => {
    const updatedBooks = loadBooks().filter((book) => book.id !== bookId);
    saveBooks(updatedBooks);
    navigate("/books");
  };

  return (
    <MainAppContainer className="flex items-center">
      <BookEditor
        title="Update Book"
        book={book}
        onSave={onSave}
        onDelete={() => onDelete(id)}
      />
    </MainAppContainer>
  );
}
