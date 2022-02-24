import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, handlePage, nbPages, isLoading } = useGlobalContext();

  return (
    <div className="btn-container">
      <button
        className="btn"
        disabled={isLoading}
        onClick={() => {
          handlePage(page - 1);
        }}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        className="btn"
        disabled={isLoading}
        onClick={() => {
          handlePage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
