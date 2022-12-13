import React from "react";
import { userReview } from "../../styleAux/fontAwesoneIcon";
import "../../styles/products/reviewsCard.css";
import Stars from "../Stars";

const ReviewsCard = ({ data }) => {
  return (
    <div className="reviewCardDiv">
      <div className="containerWStars">
        <Stars data={data.puntuacion*2} />
      </div>
      <div className="content">
        <span className="userIcon">{userReview}</span>
        <p className="comment">"{data.comentarios}"</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
