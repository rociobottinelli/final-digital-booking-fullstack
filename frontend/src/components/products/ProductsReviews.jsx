import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, getAllReviews } from "../../constants/urls";
import ReviewsCard from "./ReviewsCard";
import "../../styles/products/productsReviews.css"

const ProductsReviews = ({ productDetails }) => {
  const [reviews, setReviews] = useState([]);

  function getProductsReviews() {
    axios
      .get(baseUrl + getAllReviews)
      .then(function (response) {
        const reviewsGet = response.data;
        setReviews(reviewsGet);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getProductsReviews();
  }, []);

  function checkId(reviews) {
    return (
      reviews.productos.id === productDetails.id && reviews.comentarios !== ""
    );
  }

  const reviewsById = reviews.filter(checkId);
  const threeReviewsToShow = reviewsById.slice(-3);
  return (
    <div className="reviewsContainer">
      <h2>¿Qué opinan sus huéspedes?</h2>
      <hr className="sectionDivider"></hr>
      <div className="reviewsCards">
      {threeReviewsToShow.length === 0 ? (
        <div className="emptyReviews">
          <h3> Sin evaluaciones (por ahora) </h3>
        </div>
      ) : (
        threeReviewsToShow.map((review) => (
          <div className="individualReviewCard">
            <ReviewsCard key={review.id} data={review} />
          </div>
          
        ))
      )}
      </div>
    </div>
  );
};

export default ProductsReviews;
