import React from "react";
import Card from "../../../components/card/Card";

const Catalog = ({ catalogList, onAdd }) => {
  return (
    <div className="container">
      <div className="catalog">
        {catalogList.map((item, index) => (
          <Card item={item} key={index} index={index} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
