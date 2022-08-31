import React from "react";
import ServiceInfo from "./serviceInfo/ServiceInfo";
import ServiceList from "./serviceList/ServiceList";

const ServicePageContainer = () => {
  return (
    <>
      <ServiceInfo />
      <div className="service-wrapper">
        <div className="service-wrapper__list">
          <ServiceList />
        </div>
        <div className="service-wrapper__content">Router</div>
      </div>
    </>
  );
};

export default ServicePageContainer;
