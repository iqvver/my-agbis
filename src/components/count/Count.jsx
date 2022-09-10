import React, { useState } from "react";

const Count = ({ basket, setCount }) => {
  let addIncriment = () => {
    setCount((basket.count += 1));
  };
  let addDecriment = () => {
    setCount((basket.count -= 1));
  };

  return (
    <div className="basket__button-block">
      <button className="button_nobb" onClick={addIncriment}>
        +
      </button>
      <div className="solid">{basket.count}</div>
      <button className="button_nobb" onClick={addDecriment}>
        -
      </button>
    </div>
  );
};

export default Count;
