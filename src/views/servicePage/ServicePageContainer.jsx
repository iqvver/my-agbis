import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DryOuterwear from "./serviceContent/serviceDry/DryOuterwear";
import DrySuit from "./serviceContent/serviceDry/DrySuit";
import ServiceDry from "./serviceContent/serviceDry/ServiceDry";
import AqaOuterwear from "./serviceContent/serviseAqa/AqaOuterwear";
import AqaSuit from "./serviceContent/serviseAqa/AqaSuit";
import ServiceAqa from "./serviceContent/serviseAqa/ServiceAqa";
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
            <Route index path="drysuit" element={<DrySuit />} />
            <Route path="dryouterwear" element={<DryOuterwear />} />
            <Route path="aqasuit" element={<AqaSuit />} />
            <Route path="aqaouterwear" element={<AqaOuterwear />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ServicePageContainer;
