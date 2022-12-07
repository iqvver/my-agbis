import React from "react";
import Basket from "../basketView/basket/Basket";

const BasketPageContainer = ({ basket, onDel, editCount }) => {
  let [,setCount] = React.useState(basket.count);
  return (
    <>
      <Basket basket={basket} onDel={onDel} setCount={setCount} editCount={editCount} />
    </>
  );
};

export default BasketPageContainer;
