import React from "react";
import right from "../../assets/Icons/right.png";
import basket from "../../assets/Icons/basket.png";

const List = ({ services }) => {
  return (
    <div className="list">
      <div className="list__title">{services.name}</div>
      <div className="list__content">
        <div className="list__price">{services.price}</div>
        <div className="list__basket">
          <button className="button_nobb">
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
