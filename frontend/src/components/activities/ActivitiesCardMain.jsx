import React, { useContext} from "react";
import "../../styles/listImageCard.css";
import { Link } from "react-router-dom";
import { imgLocation } from "../../styleAux/fontAwesoneIcon";
import "../../styles/productCard.css";
import FilterContext from "../../context/FilterContext";
import Stars from "../Stars";

function ActivitiesCardMain({volverA, filterArrayPlaces,dataPlaces, id}) {
  const { setLinkToBack } = useContext(FilterContext);

  function setLink() {
    setLinkToBack(volverA);
  }
  
  return (
    <div className="listImageContainer" id={id}>
      {(filterArrayPlaces.length === 0 ? dataPlaces : filterArrayPlaces).map(
        (data) => (
          <div key={data.nombre} className="cardListImageContainer">
            <div className="imgContainer">
              <img key={data.id} src={data.imagenPortada} alt="img" />
            </div>
            <div className="characteristics">
              <div className="listImageContainer__top">
                <div className="listImageContainer__top_1">
                  <div className="characteristics__stars">
                    <h5>{data.ciudad.city.toUpperCase()}</h5>
                    <div className="productsHeaderdetails__secondblock__stars">
                      <Stars data={data.puntaje}/>
                    </div>
                  </div>
                  <div className="listImageCardTitle">
                    <h3>{data.nombre}</h3>
                  </div>
                </div>
                <div className="listImageContainer__top_2" id="listImageContainer__top_2__places">
                  <span>{data.puntaje}</span>
                </div>
              </div>
              <div className="listImageCard__characteristics">
                <span>{imgLocation}</span>
                <p>{data.direccion}</p>
              </div>
              <div className="listImageCard__characteristics">
                <p>Costo visita promedio: ${data.costoPromedio},00</p>
              </div>
              <p className="listImageCard__characteristics__desc">
                {data.introduccion}
              </p>
              <Link
                onClick={setLink}
                to={`/lugares/${data.id}/${data.nombre.replace(
                  /[+ ]|%20/g,
                  "-"
                )}`}
              >
                <button>Ver más</button>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ActivitiesCardMain;
