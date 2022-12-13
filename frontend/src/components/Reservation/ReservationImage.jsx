import React from "react";

const ReservationImage = ({ product }) => {
  return (
    <div className="reservationD__container__card__img">
      {product.imagen.map(
        (ele) =>
          ele.title === "principal" && <img key={product.id.toString()} src={ele.url} alt="img" />
      )}
    </div>
  );
};

export default ReservationImage;
