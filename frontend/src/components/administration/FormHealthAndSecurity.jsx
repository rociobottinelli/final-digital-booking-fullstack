import React from "react";

const FormHealthAndSecurity = ({ administrationForm, setAdministrationForm }) => {
  const handleChecked = (e) => {
    setAdministrationForm({
      ...administrationForm,
      healthAndSecurity: { ...administrationForm.healthAndSecurity, [e.target.name]: e.target.checked },
    });
  };

  return (
    <form className="generalContainer">
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="healthAndSecurity"
          name="covid"
          checked={administrationForm.healthAndSecurity.covid ? true : false}
          onChange={handleChecked}></input>
        Se aplican las pautas de distanciamiento social y otras formas relacionadas con el
        coronavirus
      </label>
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="healthAndSecurity"
          name="fireDetector"
          checked={administrationForm.healthAndSecurity.fireDetector ? true : false}
          onChange={handleChecked}></input>
        Detector de humo
      </label>
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="healthAndSecurity"
          name="security"
          checked={administrationForm.healthAndSecurity.security ? true : false}
          onChange={handleChecked}></input>
        Depósito de seguridad
      </label>
    </form>
  );
};

export default FormHealthAndSecurity;
