import React from "react";
import FormCancelationPolitics from "./FormCancelationPolitics";
import FormHealthAndSecurity from "./FormHealthAndSecurity";
import FormHouseRules from "./FormHouseRules";

const Politics = ({ administrationForm, setAdministrationForm }) => {
  return (
    <>
      <h5 className="formTemplate__h5">Normas del hospedaje</h5>
      <FormHouseRules
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
      <h5 className="formTemplate__h5">Salud y seguridad</h5>
      <FormHealthAndSecurity
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
      <h5 className="formTemplate__h5">Política de cancelación</h5>
      <FormCancelationPolitics
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
    </>
  );
};

export default Politics;
