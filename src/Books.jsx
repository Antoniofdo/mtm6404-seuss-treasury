import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Books</h2>

      <div className="book-grid">
        {books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <img src={book.image} alt={book.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;