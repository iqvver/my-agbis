import React, { useState } from "react";
import Divider from "../divider/Divider";
import basketBtn from "../../assets/icons/basketBtn.png";
import del from "../../assets/icons/del.png";
import Count from "../count/Count";

const Basket = ({ basket }) => {
  const [activeBasket, setActive] = useState(false);
  const [, setCount] = useState(basket.count);
  const [qq, setDel] = useState(basket);
  const [, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };
  const totalCount = basket.reduce((a, b) => a + b.count, 0);
  const totalPrice = basket.reduce((a, b) => a + b.price * b.count, 0);

  const myBasket = [...basket].map((basket) =>
    basket.count !== 0 ? (
      <BasketContent
        basket={basket}
        setCount={setCount}
        setDel={setDel}
        reset={reset}
      />
    ) : null
  );

  return (
    <>
      {!activeBasket ? (
        <div className="basket">
          <div className="basket__title">Корзина</div>
          <div className="basket__btn">
            <button className="button_nobb" onClick={() => setActive(true)}>
              <img src={basketBtn} alt="basketBtn" />
            </button>
          </div>
          <div className="basket__count">
            <text>Количество услуг в корзине</text>
            <div className="solid">{totalCount}</div>
          </div>
          <div className="basket__sum">
            <text> Сумма заказа </text>
            <div className="solid">{totalPrice} &#8381;</div>
          </div>
        </div>
      ) : (
        <div className="basket basket_active">
          <div className="basket__title">Корзина</div>
          <div className="basket__btn_active">
            <button className="button_nobb" onClick={() => setActive(false)}>
              <img src={basketBtn} alt="basketBtn" />
            </button>
          </div>
          <div className="basket__count">
            <text>Количество услуг в корзине</text>
            <div className="solid">{totalCount}</div>
          </div>
          <div className="basket__sum">
            <text> Сумма заказа </text>
            <div className="solid">{totalPrice} &#8381;</div>
          </div>
          {myBasket}
          <button className="button button_center">Оформить заказ</button>
        </div>
      )}
    </>
  );
};

const BasketContent = ({ basket, setCount, setDel, reset }) => {
  let delLet = () => {
    setDel(
      (basket.category = null),
      (basket.count = 0),
      (basket.id = null),
      (basket.name = null),
      (basket.price = null),
      (basket.totalSum = null)
    );
    reset();
  };
  return (
    <div className="basket__wrapper">
      <div className="basket__category">{basket.category}</div>
      <Divider />
      <div className="basket__del" onClick={delLet}>
        <img src={del} alt="del" />
      </div>
      <div className="basket__descr">
        <div className="basket__product">{basket.name}</div>
        <div className="basket__product-count">
          <div className="solid">{basket.price * basket.count} &#8381;</div>
          <Count basket={basket} setCount={setCount} />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Basket;
