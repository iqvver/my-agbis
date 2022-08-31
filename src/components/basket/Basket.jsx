import React from "react";
import basketBtn from "../../assets/Icons/basketBtn.png";

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket__title">Корзина</div>
      <div className="basket__btn">
        <button>
          <img src={basketBtn} alt="basketBtn" />{" "}
        </button>
      </div>
      <div className="basket__count">
        <text>Количество услуг в корзине</text>
        <num>1</num>
      </div>
      <div className="basket__sum">
        <text> Сумма заказа </text>
        <num>1400₽</num>
      </div>
    </div>
  );
};

export default Basket;
