import React from "react";
import Catalog from "./Catalog";

const CatalogContainer = ({catalogList, onAdd}) => {
  return (
    <div>
      <Catalog catalogList={catalogList} onAdd={onAdd} />
    </div>
  );
};

export default CatalogContainer;
