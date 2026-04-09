import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BooksData() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching book id:", id);
    fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => {
        console.log("Book data fetch status:", res.status);
        console.log("Full response:", res);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Book data:", data);
        setBook(data);
      })
      .catch((err) => {
        console.error("Book data fetch error:", err);
        setError(err.message);
      });
  }, [id]);

  if (error) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <p style={{color: 'red', fontSize: '1.2em'}}>Error loading book: {error}</p>
        <Link to="/books" style={{ color: '#87ceeb', fontWeight: 'bold' }}>← Back to Books</Link>
      </div>
    );
  }
  if (!book) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2em' }}>Loading book for ID: {id}...</p>
        <Link to="/books" style={{ color: '#87ceeb', fontWeight: 'bold' }}>← Back to Books</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', padding: '20px' }}>
      <h2 style={{ color: 'black', fontSize: '2em', marginBottom: '10px' }}>{book.title}</h2>
      <img src={book.image} alt={book.title} style={{ maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
      <p style={{ fontSize: '1.1em', lineHeight: '1.5', color: 'black', margin: '20px 0' }}>{book.description}</p>
      <Link to="/books" style={{ color: '#87ceeb', fontWeight: 'bold' }}>← Back to Books</Link>
    </div>
  );
}

export default BooksData;