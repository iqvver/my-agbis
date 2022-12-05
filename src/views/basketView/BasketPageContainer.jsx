import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Basket from "../../components/basket/Basket";
import { onDel } from "../../redux/basket-reduser";

let mapStateToProps = (state) => {
  return {
    basket: state.basketPage.basket,
    onDel: state.basketPage.onDel,
  };
};

const BasketPageContainer = (props) => {
  return (
    <>
      <Basket basket={props.basket} onDel={props.onDel} />
    </>
  );
};

export default compose(connect(mapStateToProps, {onDel}))(
  BasketPageContainer
);
