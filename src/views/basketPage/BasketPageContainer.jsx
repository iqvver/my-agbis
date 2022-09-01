import React from "react";
import { connect } from "react-redux";
import Basket from "../../components/basket/Basket";

let mapStateToProps = (state) => {
  return {
    basket: state.basketPage.basket,
  };
};

const BasketPageContainer = (props) => {
  debugger;
  return (
    <div>
      <Basket basket={props.basket} />
    </div>
  );
};

export default connect(mapStateToProps)(BasketPageContainer);
