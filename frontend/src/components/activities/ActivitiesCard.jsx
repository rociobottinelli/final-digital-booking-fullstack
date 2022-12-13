import React from 'react'
import ActivitiesCardInfo from './ActivitiesCardInfo';
import ActivitiesCardStars from './ActivitiesCardStars';
import ProductsLocation from '../products/ProductsLocation.jsx';
import InfoFooter from './InfoFooter';

function ActivitiesCard(props) {
    const place = props.details;
  return (
    <div>
        <ActivitiesCardStars details={place}/>
        <ActivitiesCardInfo details={place}/>
        <ProductsLocation productDetails={place}/>
        <InfoFooter />
    </div>
  )
}

export default ActivitiesCard