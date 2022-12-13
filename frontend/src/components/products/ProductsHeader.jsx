import "../../styles/products/productsHeader.css";
import React from "react";
import { imgLocationP } from "../../styleAux/fontAwesoneIcon";
import ProductsHeaderTop from "./ProductsHeaderTop";
import Stars from "../Stars";
import StarsText from "../StarsText";

function ProductsHeader(props) {
  const product = props.productDetails;
  if (product !== "" && product.ciudad !== "") {
    return (
      <>
        <ProductsHeaderTop productDetails={product} linkProps={"/"} />
        <div className="productsHeaderdetails">
          <div className="productsHeaderdetails__firtsblock">
            <div className="productsHeaderdetails__firtsblock__icon">
              <span>{imgLocationP}</span>
            </div>
            <div className="productsHeaderdetails__firtsblock__text">
              <p>{product.ciudad.city}, Argentina</p>
              <p className="productsHeaderdetails__firtsblock__distance">
                A {product.id * 50} m del centro
              </p>
            </div>
          </div>
          <div className="productsHeaderdetails__secondblock">
            <div>
              <StarsText data={product.puntuacion} />
              <Stars data={product.puntuacion} />
            </div>
            <div
              className={
                product.puntuacion === 0 ? "" : "productsHeaderdetails__secondblock__number"
              }>
              <div>{product.puntuacion === 0 ? "" : product.puntuacion}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h2> No pudimos cargar el producto </h2>
      </div>
    );
  }
}

export default ProductsHeader;
