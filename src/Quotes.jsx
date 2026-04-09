import { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => {
        console.log("Quotes fetch status:", res.status);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Quotes data:", data);
        setQuotes(data);
      })
      .catch((err) => {
        console.error("Quotes fetch error:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: 'black', textAlign: 'center' }}>Random Quotes</h2>

      {error && (
        <p style={{color: 'red', fontSize: '1.2em', textAlign: 'center'}}>Error loading quotes: {error}. Check console.</p>
      )}
      {quotes.length === 0 && !error && (
        <p style={{ fontSize: '1.2em', textAlign: 'center' }}>Loading quotes...</p>
      )}
      {quotes.map((quote, index) => (
        <div key={index} className="quote-box" style={{ background: 'white', color: 'black', margin: '10px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <p style={{ fontSize: '1.1em', lineHeight: '1.5', fontStyle: 'italic' }}>"{quote.text}"</p>
          <small style={{ color: '#666' }}>— {quote.book?.title}</small>
        </div>
      ))}
    </div>
  );
}

export default Quotes;