type BookStatus =
  (typeof import("./components/book-editor").bookStatusOptions)[number];

type Book = {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
};
