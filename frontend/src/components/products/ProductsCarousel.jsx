import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "../../styles/products/productsCarousel.css";

function ProductsCarousel({ productDetails }) {
  const settings = {
    rows: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => <div>{i + 1}/5</div>,
  };
  return (
    <div className="productsCarousel">
      <Slider {...settings}>
        <div className="products__img__carousel">
          <h3>
            <img src={productDetails.imagen[0].url} alt="img_secondary" />
          </h3>
        </div>
        <div className="products__img__carousel">
          <h3>
            <img src={productDetails.imagen[1].url} alt="img_secondary" />
          </h3>
        </div>
        <div className="products__img__carousel">
          <h3>
            <img src={productDetails.imagen[2].url} alt="img_secondary" />
          </h3>
        </div>
        <div className="products__img__carousel">
          <h3>
            <img src={productDetails.imagen[3].url} alt="img_secondary" />
          </h3>
        </div>
        <div className="products__img__carousel">
          <h3>
            <img src={productDetails.imagen[4].url} alt="img_secondary" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default ProductsCarousel;
