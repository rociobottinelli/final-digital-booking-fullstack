import "../../styles/products/productsCarouselDesktop.css";
import React, { useContext, useState } from "react";
import Slider from "react-slick";
import OpenCarouselContext from "../../context/OpenCarouselContext";

function ProductsCarouselDesktop(props) {
  const { openCarousel, handleCarousel } = useContext(OpenCarouselContext);
  const product = props.productDetails;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const handleModal = (e) => e.stopPropagation();

  return (
    <div onClick={handleModal} className={openCarousel ? "productsCarouselDesktop" : "closeCarousel"}>
      <span
        className="productsCarouselDesktop__closeCarousel"
        onClick={handleCarousel}
      >
        X
      </span>
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        dots={true}
        customPaging={(i) => (
          <div className="carouselDesktopDots">{i + 1}/5</div>
        )}
      >
        <div>
          <h3 className="carousel__img__top">
            <img
              className="carousel__img__top"
              src={product.imagen[0].url}
              alt="imagenPrincipal"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__top">
            <img
              className="carousel__img__top"
              src={product.imagen[1].url}
              alt="img_secondary"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__top">
            <img
              className="carousel__img__top"
              src={product.imagen[2].url}
              alt="img_secondary"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__top">
            <img
              className="carousel__img__top"
              src={product.imagen[3].url}
              alt="img_secondary"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__top">
            <img
              className="carousel__img__top"
              src={product.imagen[4].url}
              alt="img_secondary"
            />
          </h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        className="secondSlider"
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3 className="carousel__img__bot">
            <img
              src={product.imagen[0].url}
              alt="img_main"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__bot">
            <img
              src={product.imagen[1].url}
              alt="img_secondary"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__bot">
            <img
              src={product.imagen[2].url}
              alt="img_secondary"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__bot">
            <img
              src={product.imagen[3].url}
              alt="img_secondary"
            />
          </h3>
        </div>
        <div>
          <h3 className="carousel__img__bot">
            <img
              src={product.imagen[4].url}
              alt="img_secondary"
            />
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default ProductsCarouselDesktop;
