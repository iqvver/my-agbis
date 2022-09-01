import React from "react";
import { connect } from "react-redux";
import List from "../../../../components/list/List";
import { newServicesAC } from "../../../../redux/basket-reduser";

let mapStateToProps = (state) => {
  return {
    services: state.basketPage.dryServices,
    newCategory: state.basketPage.newCategory,
    newName: state.basketPage.newName,
    newPrice: state.basketPage.newPrice,
    newCount: state.basketPage.newCount,
  };
};

// отправка данных в state
let mapDispatchToProps = (dispatch) => {
  return {
    addService: (newCategory, newName, newPrice, newCount, newId) => {
      dispatch(newServicesAC(newCategory, newName, newPrice, newCount, newId));
    },
  };
};

const DrySuitContainer = (props) => {
  return (
    <div>
      {props.services.map((dryServicesCard) => (
        <List
          services={dryServicesCard}
          addService={props.addService}
          handleSubmit={props.handleSubmit}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DrySuitContainer);
