import React, { useState } from "react";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

const Count = ({ basket, editCount, id, setCount }) => {
  
  let addIncriment = () => {
    setCount((basket.count += 1));
    editCount(basket.count, id);
  };
  let addDecriment = () => {
    setCount((basket.count -= 1));
    editCount(basket.count, id);
  };

  return (
    <div className="count">
      <div className="count__plus" onClick={addIncriment}>
        <img src={plus} alt="plus" />
      </div>
      <div className="solid">{basket.count}</div>
      <div className="count__minus" onClick={addDecriment}>
        <img src={minus} alt="minus" />
      </div>
    </div>
  );
};

export default Count;
