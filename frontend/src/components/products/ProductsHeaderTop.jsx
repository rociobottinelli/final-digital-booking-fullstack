import React from 'react'
import { Link } from "react-router-dom";
import {  imgLeft } from "../../styleAux/fontAwesoneIcon";

function ProductsHeaderTop(props) {
  const product = props.productDetails;
  const link = props.linkProps;

  return (
    <div><div className="productsHeader">
    <div className="productsHeader__blockLeft">
      <h2>{product ? product.categoria.title : ""}</h2>
      <h3>{product ? product.name : "Administración"}</h3>
    </div>
    <div className="productsHeader__blockRight">
      <Link to={link}>
        <span className="productsHeader__blockRight__button">
          {imgLeft}
        </span>
      </Link>
    </div>
  </div></div>
  )
}

export default ProductsHeaderTop
