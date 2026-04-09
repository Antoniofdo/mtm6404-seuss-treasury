import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Books from "./Books";
import BooksData from "./BooksData";
import Quotes from "./Quotes";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BooksData />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;