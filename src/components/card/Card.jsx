import React from "react";
import basket from "../../assets/icons/basket.png";

const Card = ({ item, index, onAdd }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={item.img} alt="item.img" />
      </div>
      <div className="card__wrapper">
        <div className="card__title">{item.name}</div>
        <div className="card__descr">
          <p>Описание:</p>
          <p>{item.descr}</p>
        </div>
        <div className="card__category">
          <p>Категория:</p>
          <p>{item.category}</p>
        </div>
        <div className="card__price">
          <div className="card__add" onClick={() => onAdd(item)}>
            <img src={basket} alt="basket" />
          </div>
          {item.price} &#8381;
        </div>
      </div>
    </div>
  );
};

export default Card;
