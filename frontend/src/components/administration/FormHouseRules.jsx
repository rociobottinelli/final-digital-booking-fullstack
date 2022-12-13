import React from "react";
import Select from "react-select";
import "../../styles/administration/formSelect.css";
import selectStyle from "../../styles/administration/selectStyle";
import hours from "./hostingCreation/hours";

const FormHouseRules = ({ administrationForm, setAdministrationForm }) => {
  const handleChecked = (e) => {
    setAdministrationForm({
      ...administrationForm,
      houseRules: { ...administrationForm.houseRules, [e.target.name]: e.target.checked },
    });
  };

  const handleChange = (e) => {
    setAdministrationForm({
      ...administrationForm,
      houseRules: { ...administrationForm.houseRules, [e.target.name]: e.target.value },
    });
  };

  return (
    <form className="generalContainer">
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="houseRules"
          name="party"
          checked={administrationForm.houseRules.party ? true : false}
          onChange={handleChecked}></input>
        No se permiten fiestas
      </label>
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="houseRules"
          name="smoke"
          checked={administrationForm.houseRules.smoke ? true : false}
          onChange={handleChecked}></input>
        No se permite fumar
      </label>
      <div className="divSelectCheckout">
        <label htmlFor="checkout">Check-out:</label>
        <div className="selectCheckout">
          <Select
            id="checkout"
            placeholder={
              administrationForm.houseRules.checkout
                ? administrationForm.houseRules.checkout
                : "Seleccioná un horario"
            }
            styles={selectStyle}
            autoFocus={"false"}
            options={hours.map((hour) => ({
              value: hour,
              text: hour,
              target: {
                name: "checkout",
                value: hour,
                text: hour,
              },
            }))}
            onChange={handleChange}
            getOptionLabel={(e) => (
              <div className="select">
                <div className="select__cities">
                  <p>{e.value}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </form>
  );
};

export default FormHouseRules;
