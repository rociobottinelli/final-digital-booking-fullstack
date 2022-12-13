import React , { useState, useEffect, useContext } from "react";
import "../../styles/activities/activitiesCardInfo.css";
import BannerImg from "../../assets/images/aViajar.png";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterContext from "../../context/FilterContext";

function ActivitiesCardInfo(props) {
  const place = props.details;
  const [price, setPrice] = useState(129);
  const [getPriceClass, setGetPriceClass] = useState("off");
  const { setLinkToBack } = useContext(FilterContext);
  
  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  function setLink() {
    setLinkToBack("/lugares/"+place.id+"/"+place.nombre);
  }  
  
  function getClass () {
    getPriceClass === "off" ? setGetPriceClass("on") : setGetPriceClass("off");
  }

  useEffect(() => {
    function getUSDPrice() {
      axios
        .get(url)
        .then((response) => {
          let valor = response.data[0].casa.venta;
          valor = valor.replace(/,/g, '.');
         valor = parseFloat(valor)
         setPrice(parseFloat(place.costoPromedio / valor))
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
    
    getUSDPrice();
  }, [place.costoPromedio]);

  return (
    <>
      <div className="activitiesCardInfo">
        <div className="activitiesCardInfo__blockLeft">
          <h2>Acerca de {place.nombre}</h2>
          <div className="activitiesCardInfo__blockLeft__details">
            <div>
              Direccion : <span>{place.direccion}</span>
            </div>
            <div>
              Pagina web: <span>{place.paginaWeb}</span>
            </div>
            <div id="activitiesCardInfo__blockLeft__text">
              <span>{place.introduccion}</span>
            </div>
          </div>
          <hr></hr>
          <div className="activitiesCardInfo__blockLeft__price">
            <span>Costo visita promedio*</span>
            <div>
              <span>desde </span>
              {getPriceClass === "off" ?
               <div>ARS $ {place.costoPromedio},00</div> :
              <div>USD $ {price.toFixed(2)}</div> }
            </div>
          </div>
          <div className="activitiesCardInfo__blockLeft____button">
          {getPriceClass === "off" ?
               <button onClick={getClass}>Ver precio en U$D</button> :
               <button onClick={getClass}>Ver precio en ARS</button>
                }
          </div>
          <span className="activitiesCardInfo__blockLeft__person">*por persona</span>
        </div>
        <div className="activitiesCardInfo__blockRight">
          <img src={place.imagenPortada} alt="imagen de portada" />
        </div>
      </div>
      <div className="activitiesCardInfo__description">
        <div className="productsfeatures">
          <h3
            className="productsfeatures__title"
            id="activitiesCardInfo__description__title"
          >
            Más información
          </h3>
          <div
            className="productsfeatures__line"
            id="activitiesCardInfo__margin"
          ></div>
          <div className="activitiesCardInfo__description__text">
            {place.introduccion}
          </div>
          <div className="activitiesCardInfo__description__text">
            {place.descripcion}
          </div>
          <div className="activitiesCardInfo__description__text">
            El sitio fue puntuado por sus visitantes y tiene un promedio de{" "}
            {place.puntaje} en su valoración
          </div>
        </div>
      </div>
      <div className="banner__container">
        <div className="activitiesCardInfo__banner">
          <div className="activitiesCardInfo__banner__text">
            <h3>¡A viajar!</h3>
            <p>
              En Digital booking te ofrecemos una experiencia <b>inolvidable</b>
              , sumá a tu viaje un recorrido por los mejores lugares ! 🗺
            </p>
            <Link to="/lugares"
            onClick={setLink}>
            <button>Ver la lista</button>
            </Link>
          </div>
          <img src={BannerImg} alt="banner" />
        </div>
      </div>
    </>
  );
}

export default ActivitiesCardInfo;
