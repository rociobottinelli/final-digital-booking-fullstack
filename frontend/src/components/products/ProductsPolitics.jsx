import React from "react";
import "../../styles/products/productsPolitics.css";

function ProductsPolitics({ productDetails }) {
  return (
    <div className="productsPolitics">
      <h2 className="productsfeatures__title">¿Qué tenés que saber?</h2>
      <div className="productsfeatures__line"></div>
      <div className="productsPolitics__details">
        <div className="productsPolitics__details__sections">
          <h3>Normas de la casa</h3>
          <div>
            {productDetails.politicas.checkout && (
              <p>Check-out: {productDetails.politicas.checkout}</p>
            )}
            {productDetails.politicas.fiesta && <p>No se permiten fiestas</p>}
            {productDetails.politicas.fumar && <p>No fumar</p>}
          </div>
        </div>
        <div className="productsPolitics__details__sections">
          <h3>Salud y seguridad</h3>
          <div>
            {productDetails.politicas.distanciamiento && (
              <p>
                Se aplican las pautas de distanciamiento social y otras formas relacionadas con el
                coronavirus
              </p>
            )}
            {productDetails.politicas.detectorHumo && <p>Detector de humo</p>}
            {productDetails.politicas.depositoSeguridad && <p>Depósito de seguridad</p>}
          </div>
        </div>
        <div className="productsPolitics__details__sections">
          <h3>Política de cancelacíon</h3>
          <div>
            {productDetails.politicas.cancelacionUno && (
              <p>Cancelación gratuita hasta el día anterior a la reserva</p>
            )}
            {productDetails.politicas.cancelacionDos && (
              <p>Costo de cancelación: valor de una noche</p>
            )}
            {productDetails.politicas.cancelacionTres && (
              <p>Costo de cancelación: 50% del valor total de la reserva</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPolitics;
