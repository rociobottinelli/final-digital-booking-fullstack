import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { imgStar, imgStarHalf } from "../../styleAux/fontAwesoneIcon";

const ReservationStars = () => {
  const imgStarRegular = <FontAwesomeIcon className="fa-star" icon={faStar} />;

  return (
    <div className="productsHeaderdetails__secondblock__stars">
      <span>{imgStar}</span>
      <span>{imgStar}</span>
      <span>{imgStar}</span>
      <span>{imgStarHalf}</span>
      <span>{imgStarRegular}</span>
    </div>
  );
};

export default ReservationStars;
