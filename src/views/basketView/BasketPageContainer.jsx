import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Basket from "../../components/basket/Basket";

let mapStateToProps = (state) => {
  return {
    basket: state.basketPage.basket,
  };
};

const BasketPageContainer = (props) => {
  return (
    <>
      <Basket basket={props.basket} />
    </>
  );
};

export default compose(connect(mapStateToProps))(
  BasketPageContainer
);
