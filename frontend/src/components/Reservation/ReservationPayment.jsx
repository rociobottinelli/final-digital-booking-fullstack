import React, { useContext } from "react";
import "../../styles/reservation/reservationPayment.css";
import FilterContext from "../../context/FilterContext";

function ReservationPayment() {
  const { setclassName, paymentSuccessful, setClearInput } =
    useContext(FilterContext);

  const changeClassFirst = () => {
    setclassName("");
    setClearInput("false");
  };

  const changeClass = () => {
    setclassName("");
  };
  return (
    <div className="reservationPayment">
      {paymentSuccessful === false ? (
        <div onClick={changeClassFirst}>Agregar método de pago</div>
      ) : (
        <div onClick={changeClass}>Modificar método de pago</div>
      )}
    </div>
  );
}

export default ReservationPayment;
