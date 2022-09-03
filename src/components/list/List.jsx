import React from "react";
import { reduxForm } from "redux-form";
import right from "../../assets/icons/right.png";
import basket from "../../assets/icons/basket.png";

const List = ({ services, addService, id }) => {
  let addNewService = () => {
    addService(id);
  };

  return (
    <div className="list">
      <div className="list__title">{services.name}</div>
      <div className="list__content">
        <div className="list__price">{services.price}</div>
        <div className="list__basket">
          <AddFormRedux onSubmit={addNewService} services={services} />
        </div>
      </div>
      <div className="list__details">
        Подробнее <img src={right} alt="right" />
      </div>
    </div>
  );
};

// форма регистрации (отправки введеных данных в массив)
const MyServices = ({ handleSubmit, handleCall }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="list__basket">
        <button className="button_nobb" type="submit">
          <img src={basket} alt="basket" onClick={handleCall} />
        </button>
      </div>
    </form>
  );
};

const AddFormRedux = reduxForm({
  form: "userForm",
})(MyServices);

export default List;
