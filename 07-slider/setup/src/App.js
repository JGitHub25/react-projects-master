import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <section className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === value) {
            position = "activeSlide";
          }
          if (
            personIndex === value - 1 ||
            (value === 0 && personIndex === people.length - 1)
          ) {
            //Esta lógica para encontrar al último mientras se hace carrusel no me quedó muy clara.
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </section>
    </section>
  );
}

export default App;
