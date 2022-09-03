import React from 'react';
import { connect } from "react-redux";
import List from "../../../../components/list/List";
import { newServicesAC } from "../../../../redux/basket-reduser";

let mapStateToProps = (state) => {
  return {
    services: state.basketPage.dryServices,
    newId: state.basketPage.dryServices.id,
  };
};

// отправка данных в state
let mapDispatchToProps = (dispatch) => {
  return {
    addService: (id) => {
      dispatch(newServicesAC(id));
    },
  };
};

const DrySuitContainer = (props) => {
  return (
    <>
      {props.services.map((dryServicesCard) => (
        <List
          services={dryServicesCard}
          addService={props.addService}
          id={dryServicesCard.id}
        />
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DrySuitContainer);
