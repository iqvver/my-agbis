import React from "react";
import { connect } from "react-redux";
import List from "../../../../components/list/List";

let mapStateToProps = (state) => {
  return {
    services: state.basketPage.dryServices,
  };
};

const DrySuitContainer = (props) => {
  return (
    <div>
      {props.services.map((dryServicesCard) => (
        <List services={dryServicesCard} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(DrySuitContainer);
