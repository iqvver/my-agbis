import React from "react";
import { Routes, Route } from "react-router-dom";
import DrySuitContainer from "./serviceContent/serviceDry/DrySuitContainer";
import AqaSuitContainer from "./serviceContent/serviseAqa/AqaSuitContainer";
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
        <div className="service-wrapper__content">
          <Routes>
            <Route index path="drysuit" element={<DrySuitContainer />} />
            <Route path="dryouterwear" element={<DrySuitContainer />} />
            <Route path="aqasuit" element={<AqaSuitContainer />} />
            <Route path="aqaouterwear" element={<AqaSuitContainer />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ServicePageContainer;
