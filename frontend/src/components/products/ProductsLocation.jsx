import React from 'react'
import "../../styles/products/productsLocation.css";
import Map from './ProductsMap';

function ProductsLocation(props) {
  const product = props.productDetails;
  return (
    <div className='productsLocation'>
        <h3 className='productsLocation__title'>¿Dónde vas a estar?</h3>
        <div className='productsfeatures__line'></div>
        <h4 className='productsLocation__subtitle'>{product.ciudad.city}, Argentina</h4>
        <div className='productsLocation__imgContainer'>
          <Map {...product} />
        </div>
    </div>
  )
}

export default ProductsLocation