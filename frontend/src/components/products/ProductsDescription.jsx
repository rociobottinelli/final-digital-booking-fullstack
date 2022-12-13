import React from 'react';
import '../../styles/products/productsDescription.css';

function ProductsDescription(props) {
  const product = props.productDetails;
  return (
    <div className='productsDescription'>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductsDescription;
