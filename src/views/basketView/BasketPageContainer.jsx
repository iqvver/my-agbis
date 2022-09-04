import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Basket from "../../components/basket/Basket";

let mapStateToProps = (state) => {
  return {
    basket: state.basketPage.basket,
    newId: state.basketPage.basket.id,
  };
};

const BasketPageContainer = (props) => {
  return (
    <div>
      <Basket
        basket={props.basket}
        addCount={props.addCount}
        id={props.basket.id}
      />
    </div>
  );
};

export default connect(mapStateToProps)(BasketPageContainer);
