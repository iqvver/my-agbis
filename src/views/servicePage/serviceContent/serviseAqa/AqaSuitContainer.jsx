import React from "react";
import { connect } from "react-redux";
import List from "../../../../components/list/List";

let mapStateToProps = (state) => {
  return {
    services: state.basketPage.aqaServices,
  };
};

const AqaSuitContainer = (props) => {
  return (
    <div>
      {props.services.map((aqaServicesCard) => (
        <List services={aqaServicesCard} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(AqaSuitContainer);
