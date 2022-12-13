import React, { useState, useContext, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../../styles/reservation/reservationPayment.css";
import FilterContext from "../../context/FilterContext";

export default function PaymentForm() {
  const [focus] = useState("");

  const {
    className,
    setclassName,
    setPaymentSuccessful,
    cvc,
    setcvc,
    expiry,
    setexpiry,
    name,
    setname,
    number,
    setnumber,
    clearInput,
  } = useContext(FilterContext);

  const ejecutePayment = () => {
    if (
      (cvc.length > 2) &
      (expiry.length > 3) &
      (name.length > 3) &
      (number.length === 16)
    ) {
      setPaymentSuccessful(true);
      changeClass();
    }
  };  

  useEffect(() => {
    function clearInputs() {
      if (clearInput === true) {
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";
        document.getElementsByTagName("input")[3].value = "";
      }
    }

    clearInputs();
  }, [clearInput]);

  const handleInputFocus = (e) => {
    if (e.target.name === "cvc") {
      setclassName("paymentBack");
    }
  };

  const setValueChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setname(value);
    } else if (name === "number") {
      setnumber(value);
    } else if (name === "expiry") {
      setexpiry(value);
    } else if (name === "cvc") {
      setcvc(value);
    }
  };

  const cancelTransaction = () => {
    changeClass();
    setname("DIGITAL BOOKING");
    setnumber("");
    setexpiry("");
    setcvc("");
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
    document.getElementsByTagName("input")[2].value = "";
    document.getElementsByTagName("input")[3].value = "";
    setPaymentSuccessful(false);
  };

  const changeClass = () => {
    setclassName("none");
  };

  return (
    <div id="PaymentForm" className={className}>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
        placeholders={{ name: "DIGITAL BOOKING" }}
        acceptedCards={["visa", "mastercard"]}
      />
      <form className="reservationCreditCard__form">
        <div className="form-group">
          <input
            type="text"
            name="number"
            className="form-control"
            placeholder="Numero de tarjeta"
            maxLength={16}
            required
            onChange={setValueChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            maxLength={18}
            className="form-control"
            placeholder="Nombre y Apellido"
            required
            onChange={setValueChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="row" id="reservation__bot">
          <div className="col-6">
            <input
              type="string"
              name="expiry"
              className="form-control"
              placeholder="MMAA"
              maxLength={4}
              required
              onChange={setValueChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="col-6">
            <input
              type="string"
              name="cvc"
              className="form-control"
              placeholder="Codigo de Seguridad"
              pattern="\d{3,4}"
              maxLength={3}
              required
              onChange={setValueChange}
              onFocus={handleInputFocus}
              onBlur={() => setclassName("")}
            />
          </div>
        </div>
        <input type="hidden" name="issuer" value={"issuer"} />
        <div className="form-actions">
          <span id="reservationCreditCard__button" onClick={ejecutePayment}>
            Confirmar Pago
          </span>
          <span
            id="reservationCreditCard__buttonCancel"
            onClick={cancelTransaction}
          >
            Cancelar Pago
          </span>
        </div>
        <div className="acceptedCards">
          Tarjetas Aceptadas : VISA Y MASTERCARD | 1 CUOTA SIN INTERES
        </div>
      </form>
    </div>
  );
}
