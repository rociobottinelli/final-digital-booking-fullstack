import React from "react";
import "../../styles/products/productsFeatures.css";
import {
  imgWifi,
  imgAirCond,
  imgParking,
  imgKitchen,
  imgPet,
  imgPool,
  imgTv,
} from "../../styleAux/fontAwesoneIcon";

function ProductsFeatures({ productDetails }) {
  return (
    <div className="productsfeatures">
      <h3 className="productsfeatures__title">¿Qué ofrece este lugar?</h3>
      <div className="productsfeatures__line"></div>
      <div className="productsfeatures__icons">
        {productDetails.caracteristica.airConditioning && (
          <div>
            <p>
              <span>{imgAirCond}</span>
              Aire acondicionado
            </p>
          </div>
        )}
        {productDetails.caracteristica.freeParking && (
          <div>
            <p>
              <span>{imgParking}</span>
              Estacionamiento
            </p>
          </div>
        )}
        {productDetails.caracteristica.kitchen && (
          <div>
            <p>
              <span>{imgKitchen}</span>
              Cocina
            </p>
          </div>
        )}
        {productDetails.caracteristica.petsAllowed && (
          <div>
            <p>
              <span>{imgPet}</span>
              Animales permitidos
            </p>
          </div>
        )}
        {productDetails.caracteristica.pool && (
          <div>
            <p>
              <span>{imgPool}</span>
              Sala de juegos
            </p>
          </div>
        )}
        {productDetails.caracteristica.tv && (
          <div>
            <p>
              <span>{imgTv}</span>
              Smart TV
            </p>
          </div>
        )}
        {productDetails.caracteristica.wifi && (
          <div>
            <p>
              <span>{imgWifi}</span>
              Wifi
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsFeatures;
