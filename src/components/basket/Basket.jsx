import React, { useState } from "react";
import Divider from "../divider/Divider";
import basketBtn from "../../assets/Icons/basketBtn.png";

const Basket = ({ basket }) => {
  const [activeBasket, setActive] = useState(false);
  const [count, setCount] = useState(0);
  if (!activeBasket) {
    return (
      <div className="basket">
        <div className="basket__title">Корзина</div>
        <div className="basket__btn">
          <button className="button_nobb" onClick={() => setActive(true)}>
            <img src={basketBtn} alt="basketBtn" />
          </button>
        </div>
        <div className="basket__count">
          <text>Количество услуг в корзине</text>
          <num>{basket.length}</num>
        </div>
        <div className="basket__sum">
          <text> Сумма заказа </text>
          <num>{basket[0].sum}</num>
        </div>
      </div>
    );
  } else {
    return (
      <div className="basket basket_active">
        <div className="basket__title">Корзина</div>
        <div className="basket__btn_active">
          <button className="button_nobb" onClick={() => setActive(false)}>
            <img src={basketBtn} alt="basketBtn" />
          </button>
        </div>
        <div className="basket__count">
          <text>Количество услуг в корзине</text>
          <num>{basket.length}</num>
        </div>
        <div className="basket__sum">
          <text> Сумма заказа </text>
          <num>{basket[0].sum}</num>
        </div>
        <div className="basket__wrapper">
          <div className="basket__category">Химчистка</div>

          <Divider />
          <div className="basket__descr">
            <div className="basket__product">
              Пальто, полупальто с подстежкой из натурального меха
            </div>
            <div className="basket__product-count">
              <num>1 400₽</num>
              <div className="basket__button-block">
                <button className="button_nobb" onClick={() => setCount(count + 1)}>+</button>
                <num>{count}</num>
                <button className="button_nobb" onClick={() => setCount(count - 1)}>-</button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="basket__category">Аквачистка</div>
          <div className="basket__descr">
            Пальто, полупальто с подстежкой из натурального меха
          </div>
          <Divider />
          <button className="button button_center">Оформить заказ</button>
        </div>
      </div>
    );
  }
};

export default Basket;
