import React from "react";
import Basket from "../basketView/basket/Basket";

const BasketPageContainer = ({ basket, onDel, setCount }) => {
  return (
    <>
      <Basket basket={basket} onDel={onDel} setCount={setCount} />
    </>
  );
};

export default BasketPageContainer;
