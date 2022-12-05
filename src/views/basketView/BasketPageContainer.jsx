import React from "react";
import Basket from "../../components/basket/Basket";

const BasketPageContainer = ({ basket, onDel, setCount }) => {
  return (
    <>
      <Basket basket={basket} onDel={onDel} setCount={setCount} />
    </>
  );
};

export default BasketPageContainer;
