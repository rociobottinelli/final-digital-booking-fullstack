import React, { useContext, useState, useEffect } from "react";
import FilterContext from "../../context/FilterContext";
import "../../styles/reservation/reservationPrice.css";
import axios from "axios";

function ReservationPrice({ product }) {
  const { checkInDate, checkOutDate } = useContext(FilterContext);
  const [price, setPrice] = useState(129);
  const [getPriceClass, setGetPriceClass] = useState("off");

  function getClass() {
    getPriceClass === "off" ? setGetPriceClass("on") : setGetPriceClass("off");
  }

  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  
  function sumarDias(fecha, dias) {
    fecha = new Date(fecha);
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  function getDatePicked(fechaInicio, fechaFin) {
    const desde = fechaInicio;
    const hasta = fechaFin;
    let currentDate = desde;
    let dateArray = [];

    while (currentDate <= hasta) {
      dateArray.push(Date.parse(currentDate));
      currentDate = sumarDias(currentDate, 1);
    }
    return dateArray.length;
  }

  useEffect(() => {
    function getUSDPrice() {
      axios
        .get(url)
        .then((response) => {
          let valor = response.data[0].casa.venta;
          valor = valor.replace(/,/g, ".");
          valor = parseFloat(valor);
          setPrice(parseFloat(product.estadia / valor));
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    getUSDPrice();
  }, [product.estadia]);
  
  return (
    <div className="reservationPrice">
      <div>
        <div>
          {getPriceClass === "off" ? (
            <span>
              ARS ${" "}
              {product.estadia *
                (getDatePicked(checkInDate, checkOutDate) === 0
                  ? 1
                  : getDatePicked(checkInDate, checkOutDate))}
              ,00
            </span>
          ) : (
            <span>
              USD ${" "}
              {(
                price *
                (getDatePicked(checkInDate, checkOutDate) === 0
                  ? 1
                  : getDatePicked(checkInDate, checkOutDate))
              ).toFixed(2)}
            </span>
          )}
        </div>
        <p>impuestos includos</p>
        <span id="price__day">
          {checkInDate === "" ? "precio por noche" : ""}
        </span>
      </div>
      <div className="reservationPrice__button">
        {getPriceClass === "off" ? (
          <button onClick={getClass}>Ver precio en U$D</button>
        ) : (
          <button onClick={getClass}>Ver precio en ARS</button>
        )}
      </div>
    </div>
  );
}

export default ReservationPrice;
