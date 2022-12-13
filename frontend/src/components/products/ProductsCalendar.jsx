import React, { useState, useEffect } from "react";
import "../../styles/products/productsCalendar.css";
import ProductsDatePicker from "./ProductsDatePicker";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsCalendar({ productDetails }) {
  const [price, setPrice] = useState(129);
  const [getPriceClass, setGetPriceClass] = useState("off");
  const option = false;
  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  function getUSDPrice() {
    axios
      .get(url)
      .then((response) => {
        let valor = response.data[0].casa.venta;
        valor = valor.replace(/,/g, ".");
        valor = parseFloat(valor);
        setPrice(parseFloat(productDetails.estadia / valor));
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  function getClass() {
    getPriceClass === "off" ? setGetPriceClass("on") : setGetPriceClass("off");
  }

  useEffect(() => {
    getUSDPrice();
  }, []);
  return (
    <div className="productsCalendar">
      <h2 className="productsCalendar__title">Fechas Disponibles</h2>
      <div className="productsCalendar__blockCalendar">
        <div className="productsCalendar__calendar">
          <ProductsDatePicker
            productDetails={productDetails}
            pickerDisabled={option}
          />
        </div>
        <div className="productsCalendar__price__button">
        <div>

        <div id="products__calendar__price" className="activitiesCardInfo__blockLeft__price">
          <span>Precio por noche</span>
          <div >
            {getPriceClass === "off" ? (
              <div>ARS $ {productDetails.estadia},00</div>
            ) : (
              <div>USD $ {price.toFixed(2)}</div>
            )}
          </div>
        </div>
        <div id="products__calendar__details" className="activitiesCardInfo__blockLeft____button">
          {getPriceClass === "off" ? (
            <button onClick={getClass}>Ver precio en U$D</button>
          ) : (
            <button onClick={getClass}>Ver precio en ARS</button>
          )}
        </div>

        </div>
        
        <div className="productsCalendar__reservation">
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <Link
            to={`/alojamientos/${
              productDetails.id
            }/${productDetails.name.replace(/[+ ]|%20/g, "-")}/reservar`}
          >
            <button className="">Iniciar reserva</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductsCalendar;
