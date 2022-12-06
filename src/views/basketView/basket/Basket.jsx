import React, { useState } from "react";
import basketBtn from "../../../assets/icons/basketBtn.png";
import del from "../../../assets/icons/del.png";
import Count from "../../../components/count/Count";
import Divider from "../../../components/divider/Divider";

const Basket = ({ basket, onDel, setCount, editCount }) => {
  const [activeBasket, setActive] = useState(false);
  const totalCount = basket.reduce((a, b) => a + b.count, 0);
  const totalPrice = basket.reduce((a, b) => a + b.totalSum, 0);

  const myBasket = [...basket].map((basket) => (
    <BasketContent
      basket={basket}
      onDel={onDel}
      id={basket.id}
      setCount={setCount}
      editCount={editCount}
    />
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
            <p className="solid">{totalCount} шт.</p>
          </div>
          <div className="basket__sum">
            Сумма заказа:<p className="solid">{totalPrice} &#8381;</p>
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
            <p className="solid">{totalCount} шт.</p>
          </div>
          <div className="basket__sum">
            <p>Сумма заказа:</p>
            <p className="solid"> {totalPrice} &#8381;</p>
          </div>
          <Divider />
          {basket.length === 0 ? (
            <BasketNoContent />
          ) : (
            <>
              {myBasket}
              <Divider />
              <button className="basket-btn">Оформить заказ</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

const BasketContent = ({ basket, onDel, id, setCount, editCount }) => {
  return (
    <div className="basket-wrapper">
      <div
        className="basket-wrapper__del"
        onClick={() => {
          onDel(id);
        }}
      >
        <img src={del} alt="del" />
      </div>
      <div className="basket-wrapper__descr">
        <div className="basket-wrapper__product">
          <div className="basket-wrapper__product-img">
            <img src={basket.img} alt="produkt-img" />
          </div>
          <div className="basket-wrapper__product-name">{basket.name}</div>
        </div>
        <div className="basket-wrapper__product-price">
          <div className="basket-wrapper__product-count solid">
            <Count
              setCount={setCount}
              basket={basket}
              editCount={editCount}
              id={id}
            />{" "}
            Х {basket.price}
            &#8381;
          </div>
          <div className="basket-wrapper__product-total">
            Общаяя сумма: {basket.totalSum} &#8381;
          </div>
        </div>
      </div>
    </div>
  );
};

const BasketNoContent = () => {
  return <div className="basket__no">Корзина пуста</div>;
};

export default Basket;
