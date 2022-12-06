import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { onAdd, onDel, qq } from "../redux/basket-reduser";
import CatalogContainer from "./catalogView/CatalogContainer";
import BasketPageContainer from "./basketView/BasketPageContainer";

const ViewsContainer = (props) => {
  return (
    <>
      <CatalogContainer catalogList={props.catalogList} onAdd={props.onAdd} />
      <BasketPageContainer
        basket={props.basket}
        onDel={props.onDel}
        editCount={props.qq}
      />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    catalogList: state.basketPage.catalogList,
    onAdd: state.basketPage.onAdd,
    basket: state.basketPage.basket,
    onDel: state.basketPage.onDel,
    qq: state.basketPage.qq,
  };
};

export default compose(connect(mapStateToProps, { onDel, onAdd, qq }))(
  ViewsContainer
);
