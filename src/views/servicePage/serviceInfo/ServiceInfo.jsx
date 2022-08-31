import React from "react";
import Search from "../../../components/search/Search";

const ServiceInfo = () => {
  return (
    <div className="service-info">
      <div className="service-info__wrapper">
        <div className="service-info__title">Услуги</div>
        <div className="service-info__search search_service">
          <Search placeholder={"Поиск"} />
        </div>
      </div>
      <div className="service-info-descr">
        <div className="service-info-descr__clear"></div>
        <div className="service-info-descr__text">
          Из-за ежедневного использования повседневная одежда быстро
          изнашивается и нуждается в профессиональном уходе. То, что чаще
          носится, должно и чаще чиститься! Подбирать для повседневной одежды
          правильные программы обработки – это задача профессионалов.
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
