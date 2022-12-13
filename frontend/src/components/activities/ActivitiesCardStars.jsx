import React from 'react'
import { imgLocationP } from "../../styleAux/fontAwesoneIcon";
import Stars from '../Stars';
import StarsText from '../StarsText';

function ActivitiesCardStars(props) {
    const place = props.details;
  return (
    <div>
        <div className="productsHeaderdetails">
          <div className="productsHeaderdetails__firtsblock">
            <div className="productsHeaderdetails__firtsblock__icon">
              <span>{imgLocationP}</span>
            </div>
            <div className="productsHeaderdetails__firtsblock__text">
              <p>
              {place.ciudad.city}, Argentina
              </p>
            </div>
          </div>
          <div className="productsHeaderdetails__secondblock">
            <div>
              <StarsText data={place.puntaje}/>
              <div className="productsHeaderdetails__secondblock__stars">
                <Stars data={place.puntaje}/>
              </div>
            </div>
            <div className="productsHeaderdetails__secondblock__number">
              <div>{place.puntaje}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ActivitiesCardStars