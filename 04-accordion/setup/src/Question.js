import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleQuestion = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleQuestion}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* {showInfo && <p>{info}</p>} Esta es la forma original como John lo hace. La de abajo sólo para ver cómo se puede usa el state para lograr lo mismo de diferentes formas.*/}
      <p style={showInfo ? { display: "block" } : { display: "none" }}>
        {info}
      </p>
    </article>
  );
};

export default Question;
