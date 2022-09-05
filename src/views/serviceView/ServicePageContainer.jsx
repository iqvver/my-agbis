import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import DrySuitContainer from "./serviceContent/serviceDry/DrySuitContainer";
import AqaSuitContainer from "./serviceContent/serviseAqa/AqaSuitContainer";
import ServiceInfo from "./serviceInfo/ServiceInfo";
import ServiceList from "./serviceList/ServiceList";

const ServicePageContainer = () => {
  return (
    <>
      <div className="navLink">
        <NavLink to={"/dryouterwear"}>
          <h1>Нажать</h1>
          <div>
            Работают сслыки на: <br />
            химчиска -- Верхняя одежда <br />
            химчиска -- Деловой костюм <br />
            аквачистка -- Верхняя одежда <br />
            аквачистка -- Деловой костюм
          </div>
        </NavLink>
      </div>
      <ServiceInfo />
      <div className="service-wrapper">
        <div className="service-wrapper__list">
          <ServiceList />
        </div>
        <div className="service-wrapper__content">
          <Routes>
            <Route exact path="/drysuit" element={<DrySuitContainer />} />
            <Route path="/dryouterwear" element={<DrySuitContainer />} />
            <Route path="/aqasuit" element={<AqaSuitContainer />} />
            <Route path="/aqaouterwear" element={<AqaSuitContainer />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ServicePageContainer;
