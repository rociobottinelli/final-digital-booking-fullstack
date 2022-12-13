import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/urls";
import "../../styles/activities/activitiesBlockHome.css";
import FilterContext from "../../context/FilterContext";
import Stars from "../Stars";

function ActitivitiesBlockHome() {  const [dataPlaces, setDataPlaces] = useState([]);
  const { setLinkToBack } = useContext(FilterContext);

  function getLugares() {
    axios
      .get(baseUrl + "lugares/list")
      .then((response) => {
        setDataPlaces(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  function setLink() {
    setLinkToBack("/");
  }

  useEffect(() => {
    getLugares();
  }, []);

  return (
    <div className="activitiesBlockHome">
      <h2>Lugares de interés en cada destino</h2>

      <div className="activitiesBlockHome__container">
        {dataPlaces.map((lugares) =>
          lugares.id < 5 ? (
            <Link
              onClick={setLink}
              key={lugares.id}
              to={`/lugares/${lugares.id}/${lugares.nombre.replace(
                /[+ ]|%20/g,
                "-"
              )}`}
            >
              <div key={lugares.id} className="activitiesBlockHome__card">
                <img src={lugares.imagenPortada} alt="imagenLugar" />
                <h3>{lugares.nombre}</h3>

                <div className="activitiesBlockHome__card__bot">
                  <div>
                    <div
                      id="activitiesBlockHome__card__stars"
                      className="productsHeaderdetails__secondblock__stars"
                    >
                     <Stars data={lugares.puntaje}/>
                    </div>
                    <div className="activitiesBlockHome__card__city">
                      {lugares.ciudad.city}, Argentina
                    </div>
                  </div>

                  <div className="activitiesBlockHome__card__puntaje">
                    <span>{lugares.puntaje}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>

      <div className="activitiesBlockHome__seeMore">
        <Link to={"/lugares"}>
          <button>Ver más lugares</button>
        </Link>
      </div>
    </div>
  );
}

export default ActitivitiesBlockHome;
