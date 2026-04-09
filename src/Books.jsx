import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://seussology.info/api/books")
      .then((res) => {
        console.log("Fetch response status:", res.status);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Books data:", data);
        setBooks(data);
      })
      .catch((err) => {
        console.error("Books fetch error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Books</h2>

      {error && (
        <p style={{color: 'red'}}>Error loading books: {error}. Check console.</p>
      )}
      {books.length === 0 && !error && (
        <p>Loading books...</p>
      )}
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