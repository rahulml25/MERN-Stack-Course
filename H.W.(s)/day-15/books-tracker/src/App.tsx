import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AddBookPage from "./pages/AddBookPage";
import ViewBookPage from "./pages/ViewBookPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/view/:id" element={<ViewBookPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
