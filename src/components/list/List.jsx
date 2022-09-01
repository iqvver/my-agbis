import React from "react";
import { Field, reduxForm } from "redux-form";
import right from "../../assets/Icons/right.png";
import basket from "../../assets/Icons/basket.png";

const List = ({ services, addService }) => {
  let addNewService = (values) => {
    debugger;
    addService(values.newName, values.newPrice);
  };

  return (
    <div className="list">
      <div>
        <AddUserFormRedux onSubmit={addNewService} services={services} />
      </div>
      <div className="list__details">
        Подробнее <img src={right} alt="right" />
      </div>
    </div>
  );
};

// форма регистрации (отправки введеных данных в массив)
const MyUser = ({ handleSubmit, services }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="list__title">
        <Field
          className="list__field"
          name="newName"
          component="input"
          type="text"
          placeholder={services.name}
          values={services.name}
          disabled
        />
      </div>
      <div className="list__content">
        <div className="list__price">
          <Field
            className="list__field list__field_prise"
            name="newPrice"
            type="number"
            component="input"
            placeholder={services.price}
            values={services.price}
            disabled
          />{" "}
          Руб
        </div>
        <div className="list__basket">
          <button className="button_nobb" type="submit">
            <img src={basket} alt="basket" />
          </button>
        </div>
      </div>
    </form>
  );
};

const AddUserFormRedux = reduxForm({
  form: "userForm",
})(MyUser);

export default List;
