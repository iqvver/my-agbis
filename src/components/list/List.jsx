import React from "react";
import right from "../../assets/Icons/right.png";
import basket from "../../assets/Icons/basket.png";

const List = () => {
  return (
    <div className="list">
      <div className="list__title">
        Пальто, полупальто с подстежкой из натурального меха
      </div>
      <div className="list__content">
        <div className="list__price">1 400₽</div>
        <div className="list__basket">
          <button>
            <img src={basket} alt="basket" />
          </button>
        </div>
      </div>
      <div className="list__details">
        Подробнее <img src={right} alt="right" />
      </div>
    </div>
  );
};

export default List;
