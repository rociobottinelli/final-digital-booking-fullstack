import React, { useState, useEffect, useContext } from "react";
import "../../styles/profile/account.css";
import BannerImg from "../../assets/images/bannerBooking.png";
import ProductCard from "../ProductCard";
import axios from "axios";
import { baseUrl, getFavByUser } from "../../constants/urls";
import FilterContext from "../../context/FilterContext";
import Movements from "./Movements";
import PersonalDates from "./PersonalDates";
import { Link } from "react-router-dom";
import { imgLeft } from "../../styleAux/fontAwesoneIcon";
import errorImg from "../../assets/images/mono_error.png";
import "../../styles/errorMono.css";
import InfoFooter from "../activities/InfoFooter";


function Account() {
  const [favoritosList, setFavoritosList] = useState([]);
  const { setFilterDate, filterDateSearch } = useContext(FilterContext);
  const userId = localStorage.getItem("userId");

  function searchButton() {
    setFilterDate(filterDateSearch);
  }

  useEffect(() => {
    function getfavById() {
      axios
        .get(baseUrl + getFavByUser + userId)
        .then((response) => {
          setFavoritosList(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    getfavById();
  }, [userId]);

  return (
    <>
      {localStorage.getItem("userName") !== null ? (
        <>
          <div>
            <div className="productsHeader">
              <div className="productsHeader__blockLeft"></div>
              <div className="productsHeader__blockRight">
                <Link to={"/"}>
                  <span className="productsHeader__blockRight__button">
                    {imgLeft}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="account">
            <img
              className="account__image"
              src={BannerImg}
              alt="banner_profile"
            />
            <div className="account__title">
              <h2>Bienvenido {localStorage.userName}</h2>
              <h3>a tu espacio personal en Digital Booking</h3>
            </div>

            <div className="account__fav">
              <h3>Mis Datos</h3>
              <div>
                <PersonalDates userId={userId} />
              </div>
            </div>

            <div className="account__fav">
              <h3>Mis Reservas</h3>
              <div>
                <Movements />
              </div>
            </div>

            <div className="account__fav">
              <h3>Mis favoritos</h3>
              <div className="movements">
                <div className="movements__title">
                  <span>Tus&nbsp;</span> Favoritos
                </div>
                <div className="movements__title2">
                  A continuación podrás ver el detalle de tus favoritos.
                </div>
              </div>
              <div className="account__favoritos__list">
                {favoritosList.length === 0 ? (
                  <div className="account__favoritos__null">
                    Aún no tenes favoritos agregados en tu lista personal.
                  </div>
                ) : (
                  favoritosList.map((host) => (
                    <ProductCard
                      key={host.producto.id}
                      data={host.producto}
                      searchButton={searchButton}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="movements__title2" id="accounts__footer"></div>
            <InfoFooter />
          </div>
        </>
      ) : (
        <div>
          <div className="errorMono">
            <img src={errorImg} alt="Imagen mostrada al haber un error"></img>
            <h2>Acceso denegado 🛑</h2>
            <h3>Debes estar logeado para ver esta sección</h3>
            <div className="errorMono__links">
              <Link to="/iniciar-sesion">Iniciar Sesión</Link>
              <Link to="/">Volver al home</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Account;
