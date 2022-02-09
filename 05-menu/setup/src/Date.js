import React, { useState } from "react";
console.log("iop");
export const DateComponent = () => {
  const date = Math.floor(Math.random() * 10);

  const [count, setCount] = useState(0);
  const doubleIncreaseHandler = () => {
    setCount((actualCount) => actualCount + 1);
    setCount((actualCount) => actualCount + 1);
  };
  return (
    <>
      <button onClick={doubleIncreaseHandler}>Double Increase</button>
      <div>Count: {count}</div>
    </>
  );
};
