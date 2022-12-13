import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActivitiesCardMain from "./ActivitiesCardMain";
import ActivitiesBannerMain from "./ActivitiesBannerMain";
import { BsFillHouseFill } from "react-icons/bs";
import axios from "axios";
import FilterByCityContext from "../../context/FilterByCityContext";
import { baseUrl } from "../../constants/urls";

function ActivitiesMain() {
  const [dataPlaces, setDataPlaces] = useState([]);
  const { filterArrayPlaces } = useContext(FilterByCityContext);

  function getLugares() {
    axios
      .get(baseUrl + "lugares/list")
      .then((response) => {
        setDataPlaces(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  const volverA = "/lugares";

  useEffect(() => {
    getLugares();
  }, []);

  return (
    <div className="activitiesMain">
      <div className="productsHeader">
        <div className="productsHeader__blockLeft">
          <h2>Digital Booking</h2>
          <h3>Lugares de interés </h3>
        </div>
        <div className="productsHeader__blockRight">
          <Link to={"/"}>
            <span
              id="activities__home"
              className="productsHeader__blockRight__button"
            >
              <BsFillHouseFill />
            </span>
          </Link>
        </div>
      </div>
      <ActivitiesBannerMain />
      <ActivitiesCardMain
        dataPlaces={dataPlaces}
        filterArrayPlaces={filterArrayPlaces}
        volverA={volverA}
      />
    </div>
  );
}

export default ActivitiesMain;
