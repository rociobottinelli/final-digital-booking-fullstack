import React, { useContext, useEffect } from "react";
import "../../styles/products/productsImg.css";
import { BsShare } from "react-icons/bs";
import { imgHeart } from "../../styleAux/fontAwesoneIcon";
import ProductsCarousel from "./ProductsCarousel";
import ProductsCarouselDesktop from "./ProductsCarouselDesktop";
import OpenCarouselContext from "../../context/OpenCarouselContext";
import { useLocation } from "react-router-dom";
import SocialNetShare from "../socialNetShare/SocialNetShare";
import FilterContext from "../../context/FilterContext";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";
import { baseUrl, getFavByUser } from "../../constants/urls";
import IsLoggedContext from "../../context/isLogedContext";


function ProductsImg(props) {
  const { setFavoritos, favoritos } = useContext(FilterContext);
  const { openCarousel, handleCarousel } = useContext(OpenCarouselContext);
  const product = props.productDetails;
  const token = JSON.parse(localStorage.getItem("userToken"));
  const { isLoged } = useContext(IsLoggedContext);
  
  const userId = localStorage.getItem("userId");
  const location = useLocation();
  const shareUrl = `http://0621-c1-grupo05.s3-website.us-east-2.amazonaws.com/${location.pathname.slice(
    1
  )}`;
  const headersDelete = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const dataPost = {
    producto: { id: product.id },
    usuario: { id: userId },
  };
  const postFav = async () => {
    try {
      await axios.post(baseUrl + "favoritos/agregar", dataPost, {
        headers: headers,
      });
      getfavById();
    } catch (error) {
      console.log(error);
    }
  };
  function pushearFav(obj) {
    const initialState = [];
    obj.forEach((element) => initialState.push(element.producto.id));
    setFavoritos(initialState);
  }
  function getfavById() {
    axios
      .get(baseUrl + getFavByUser + userId)
      .then((response) => {
        const fav = response.data;
        pushearFav(fav);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  function develteFav(id_producto) {
    axios
      .delete(
        baseUrl + "favoritos/" + id_producto + "/" + userId,
        headersDelete
      )
      .then((response) => {
        getfavById();
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  function quitFav(id_producto) {
    develteFav(id_producto);
  }

  function addFav() {
    postFav();
  }
  useEffect(() => {
    isLoged && getfavById();
  }, []);
  return (
    <>
      <div
        onClick={handleCarousel}
        className={
          openCarousel
            ? "productsImg_carousel__desktop"
            : "productsImg_carousel"
        }
      >
        <ProductsCarouselDesktop productDetails={product} />
      </div>
      <div className="productsImg">
        <div className="productsImg__icons">
          <span className="products__icons__share">
            <span>
              <BsShare />
            </span>
            <span className="socialNetShare">
              <SocialNetShare title={product.name} url={shareUrl} />
            </span>
          </span>
          {favoritos.includes(product.id) && localStorage.login != null ? (
            <span
              onClick={() => quitFav(product.id)}
              className={"imgContainer__imgHeart__like"}
            >
              <BsHeartFill />
            </span>
          ) : (
            <span onClick={addFav} className={"imgContainer__imgHeart"}>
              {imgHeart}
            </span>
          )}
        </div>
        <div className="productsImg_carousel">
          <ProductsCarousel productDetails={product} />
        </div>
        <div className="productsImg__img">
          <div className="productsImg__img__main">
            <img src={product.imagen[0].url} alt="img_main" />
          </div>
          <div className="productsImg__img__secondary">
            <div>
              <img src={product.imagen[1].url} alt="img_secondary" />
            </div>
            <div>
              <img src={product.imagen[2].url} alt="img_secondary" />
            </div>
            <div>
              <img src={product.imagen[3].url} alt="img_secondary" />
            </div>
            <div>
              <img src={product.imagen[4].url} alt="img_secondary" />
            </div>
          </div>
        </div>
        <button className="productsImg__seemore" onClick={handleCarousel}>
          Ver más
        </button>
      </div>
    </>
  );
}

export default ProductsImg;
