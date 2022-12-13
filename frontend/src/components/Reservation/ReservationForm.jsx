import React from "react";

const ReservationForm = ({ reservationForm, setReservationForm }) => {
  const handleChange = (e) => {
    setReservationForm({
      ...reservationForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setReservationForm({
      ...reservationForm,
      [e.target.name]: e.target.checked,
    });
  };

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return (
    <form className="reservationD__dates">
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Ingrese nombre"
          value={reservationForm.name}
        ></input>
        {!reservationForm.name && (
          <p className="formError">El nombre es requerido</p>
        )}
      </div>
      <div>
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleChange}
          placeholder="Ingrese apellido"
          value={reservationForm.lastname}
        ></input>
        {!reservationForm.lastname && (
          <p className="formError">El apellido es requerido</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Ingrese email. Ejemplo: usuario@digitalhouse.com"
          value={reservationForm.email}
        ></input>
        {!reservationForm.email && (
          <p className="formError">El email es requerido</p>
        )}
        {!emailRegex.test(reservationForm.email) && (
          <p className="formError">No es un formato de email válido</p>
        )}
      </div>
      <div>
        <label htmlFor="phone">Celular</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Ingrese celular"
          pattern="^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$"
          onChange={handleChange}
          value={reservationForm.phone}
        ></input>
      </div>
      <div id="reservationForm__additionals">
        <label htmlFor="comentaries">Comentarios adicionales</label>
        <textarea
          maxLength="200"
          id="comentaries"
          name="comentaries"
          placeholder="Complete con información que considere importante para su estadía"
          onChange={handleChange}
          value={reservationForm.comentaries}
        ></textarea>
      </div>
      <div id="reservationForm__vaccine">
        <label>
          <input
            type="checkbox"
            id="covid"
            name="covid"
            placeholder="Ingrese celular"
            onChange={handleChecked}
            value={reservationForm.covid}
          ></input>
          Vacunado contra COVID19 💉
        </label>
      </div>
    </form>
  );
};

export default ReservationForm;
