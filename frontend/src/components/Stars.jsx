import React from 'react'
import {
    imgStar,
    imgStarHalf,
  } from "../styleAux/fontAwesoneIcon";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faStar } from "@fortawesome/free-regular-svg-icons";

function Stars({data}) {
    const imgStarRegular = <FontAwesomeIcon className="fa-star" icon={faStar} />;
  return (
    <div>
         <div className="productsHeaderdetails__secondblock__stars">
        {data === 0 && ""}
        {data > 0 & data < 2 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        </>  : ""}
        {data >= 2 & data < 4 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        </>  : ""}
        {data >= 4 & data < 6 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStarHalf}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        </>  : ""}
        {data >= 6 & data < 8 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStarRegular}</span>
        <span>{imgStarRegular}</span>
        </>  : ""}
        {data >= 8 & data < 9 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStarRegular}</span>
        </>  : ""}
        {data >= 9  & data < 10 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStarHalf}</span>
        </>  : ""}
        {data === 10 ? 
        <>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        <span>{imgStar}</span>
        </>  : ""}
        
              </div>
    </div>
  )
}

export default Stars