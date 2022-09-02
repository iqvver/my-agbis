import React from "react";
import { connect } from "react-redux";
import { newAqaServicesAC } from "../../../../redux/basket-reduser";
import List from "../../../../components/list/List";

let mapStateToProps = (state) => {
  return {
    services: state.basketPage.aqaServices,
    newId: state.basketPage.aqaServices.id,
  };
};

// отправка данных в state
let mapDispatchToProps = (dispatch) => {
  return {
    addAqaService: (id) => {
      dispatch(newAqaServicesAC(id));
    },
  };
};

const AqaSuitContainer = (props) => {
  return (
    <div>
      {props.services.map((aqaServicesCard) => (
        <List
          services={aqaServicesCard}
          addService={props.addAqaService}
          id={aqaServicesCard.id}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AqaSuitContainer);
