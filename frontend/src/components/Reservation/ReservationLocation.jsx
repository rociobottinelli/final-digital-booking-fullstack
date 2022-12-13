import React from "react";
import { imgLocationP } from "../../styleAux/fontAwesoneIcon";

const ReservationLocation = ({ product }) => {
  return (
    <div className="reservationD__containe__city">
      <span>{imgLocationP}</span>
      <p>
        {product.domicilio}, {product.ciudad.city}, Argentina.
      </p>
    </div>
  );
};

export default ReservationLocation;
