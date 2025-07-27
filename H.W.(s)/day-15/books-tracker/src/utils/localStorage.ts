export const loadBooks = (): Book[] => {
  return JSON.parse(localStorage.getItem("books") ?? "[]");
};
export const saveBooks = (books: Book[]) => {
  localStorage.setItem("books", JSON.stringify(books));
};
