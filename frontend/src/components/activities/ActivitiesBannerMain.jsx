import React, { useContext } from "react";
import Banner from "../../assets/images/BannerPerito.png";
import "../../styles/activities/activitiesBannerMain.css";
import ActivitiesSelect from "./ActivitiesSelect";
import axios from "axios";
import { baseUrl } from "../../constants/urls";
import FilterByCityContext from "../../context/FilterByCityContext";

function ActivitiesBannerMain() {
  const { filterCityPlace, setFilterArrayPlaces } =
    useContext(FilterByCityContext);
  function getPlacesByCity() {
    axios
      .get(baseUrl + "lugares/ciudades/" + filterCityPlace)
      .then((response) => {
        const filtro = response.data;
        setFilterArrayPlaces(filtro);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  return (
    <div className="activitiesBannerMain">
      <div className="activitiesBannerMain__banner">
        <img src={Banner} alt="bannerBooking" />
      </div>

      <div className="activitiesBannerMain__select">
        <div className="activitiesBannerMain__select__cities">
          <ActivitiesSelect className="select__activities" />
        </div>
        <div className="activitiesBannerMain__select__button">
          <button onClick={getPlacesByCity}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesBannerMain;
