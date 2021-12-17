import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const chosenParagraphs = data.slice(0, count);

    setText(chosenParagraphs);
  };

  return (
    <section className="section-center">
      <h3>tired of boring loren ipsum?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={0}
          max={9}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((parag, index) => {
          return <p key={index}>{parag}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
