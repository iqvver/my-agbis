import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { onAdd } from "../../redux/basket-reduser";
import Catalog from "./Catalog";

const CatalogContainer = (props) => {
  return (
    <div>
      <Catalog catalogList={props.catalogList} onAdd={props.onAdd} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    catalogList: state.basketPage.catalogList,
    onAdd: state.basketPage.onAdd,
  };
};
export default compose(connect(mapStateToProps, { onAdd }))(CatalogContainer);
