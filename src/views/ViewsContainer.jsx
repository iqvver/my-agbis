import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { onAdd } from "../redux/basket-reduser";
import { onDel } from "../redux/basket-reduser";
import CatalogContainer from "./catalogView/CatalogContainer";
import BasketPageContainer from "./basketView/BasketPageContainer";

const ViewsContainer = (props) => {
  let [count, setCount] = React.useState(props.basket.count);
  return (
    <>
      <CatalogContainer catalogList={props.catalogList} onAdd={props.onAdd} />
      <BasketPageContainer
        basket={props.basket}
        onDel={props.onDel}
        setCount={setCount}
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
  };
};

export default compose(connect(mapStateToProps, { onDel, onAdd }))(
  ViewsContainer
);
