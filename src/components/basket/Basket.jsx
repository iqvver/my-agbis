import React, { useState } from "react";
import basketBtn from "../../assets/icons/basketBtn.png";
import del from "../../assets/icons/del.png";
import Divider from "../divider/Divider";

const Basket = ({ basket }) => {
  const [activeBasket, setActive] = useState(false);

  const myBasket = [...basket].map((basket) => (
    <BasketContent basket={basket} />
  ));
  return (
    <>
      {!activeBasket ? (
        <div className="basket">
          <div className="basket__title">Корзина</div>
          <div className="basket__btn">
            <button className="button-nobb" onClick={() => setActive(true)}>
              <img src={basketBtn} alt="basketBtn" />
            </button>
          </div>
          <div className="basket__count">
            <p>Количество товаров в корзине:</p>
            <p className="solid">{basket.length} шт.</p>
          </div>
          <div className="basket__sum">
            <p>Сумма заказа:</p>
            <p className="solid"> &#8381;</p>
          </div>
        </div>
      ) : (
        <div className="basket basket_active">
          <div className="basket__title">Корзина</div>
          <div className="basket__btn_active">
            <button className="button-nobb" onClick={() => setActive(false)}>
              <img src={basketBtn} alt="basketBtn" />
            </button>
          </div>
          <div className="basket__count">
            <p>Количество товаров в корзине:</p>
            <p className="solid">{basket.length} шт.</p>
          </div>
          <div className="basket__sum">
            <p>Сумма заказа:</p>
            <p className="solid"> &#8381;</p>
          </div>
          <Divider />
          {myBasket}
          <button className="basket-btn">Оформить заказ</button>
        </div>
      )}
    </>
  );
};

const BasketContent = ({ basket }) => {
  return (
    <div className="basket-wrapper">
      <div className="basket-wrapper__del">
        <img src={del} alt="del" />
      </div>
      <div className="basket-wrapper__descr">
        <div className="basket-wrapper__product">
          <div className="basket-wrapper__product-img"><img src={basket.img} alt="produkt-img" /></div>
          <div className="basket-wrapper__product-name">{basket.name}</div>
        </div>
        <div className="basket-wrapper__product-count solid">
          {basket.price} &#8381;
        </div>
      </div>
    </div>
  );
};

export default Basket;
