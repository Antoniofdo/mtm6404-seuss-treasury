import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BooksData() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>

      <Link to="/books">← Back to Books</Link>
    </div>
  );
}

export default BooksData;