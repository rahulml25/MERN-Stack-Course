import BookEditor from "../components/book-editor";
import MainAppContainer from "../containers/main-app-container";

import { useNavigate } from "react-router";
import { loadBooks, saveBooks } from "../utils/localStorage";

export default function AddBookPage() {
  const navigate = useNavigate();

  const onSave = (book: Book) => {
    const books = [...loadBooks(), book];
    saveBooks(books);
    navigate("/books");
  };

  return (
    <MainAppContainer className="flex items-center">
      <BookEditor title="Add Book" onSave={onSave} />
    </MainAppContainer>
  );
}
