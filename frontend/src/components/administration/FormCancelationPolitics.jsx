import React from "react";

const FormCancelationPolitics = ({ administrationForm, setAdministrationForm }) => {
  const handleChecked = (e) => {
    setAdministrationForm({
      ...administrationForm,
      cancelationPolitics: { ...administrationForm.cancelationPolitics, [e.target.name]: e.target.checked },
    });
  };

  return (
    <form className="generalContainer">
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="cancelationPolitics"
          name="cancelationOne"
          checked={administrationForm.cancelationPolitics.cancelationOne ? true : false}
          onChange={handleChecked}></input>
        Cancelación gratuita hasta el día anterior a la reserva
      </label>
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="cancelationPolitics"
          name="cancelationTwo"
          checked={administrationForm.cancelationPolitics.cancelationTwo ? true : false}
          onChange={handleChecked}></input>
        Costo de cancelación: valor de una noche
      </label>
      <label>
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="cancelationPolitics"
          name="cancelationThree"
          checked={administrationForm.cancelationPolitics.cancelationThree ? true : false}
          onChange={handleChecked}></input>
        Costo de cancelación: 50% del valor total de la reserva.
      </label>
    </form>
  );
};

export default FormCancelationPolitics;
