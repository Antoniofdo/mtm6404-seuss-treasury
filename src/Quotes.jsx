import { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Random Quotes</h2>

      {quotes.map((quote, index) => (
        <div key={index}>
          <p>{quote.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;