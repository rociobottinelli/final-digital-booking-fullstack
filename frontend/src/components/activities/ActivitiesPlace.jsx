import React, { useEffect, useState, useContext } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { imgLeft } from "../../styleAux/fontAwesoneIcon";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/urls";
import ActivitiesCard from "./ActivitiesCard";
import FilterContext from "../../context/FilterContext";

function ActivitiesPlace() {
  let { id } = useParams();
  const [dataPlaces, setDataPlaces] = useState("initialState");
  const { linkToBack, setLinkToBack } = useContext(FilterContext);

  function setLink() {
    setLinkToBack("/");
  }

  function getLugaresByID() {
    axios
      .get(baseUrl + "lugares/" + id)
      .then((response) => {
        setDataPlaces(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  useEffect(() => {
    getLugaresByID();
  }, []);
  if (dataPlaces !== "initialState") {
    return (
      <div className="activitiesPlace">
        <>
          <div className="productsHeader">
            <div className="productsHeader__blockLeft">
              <h3>{dataPlaces.nombre}</h3>
            </div>
            <div className="productsHeader__blockRight">
              <Link 
              onClick={setLink}
              to={linkToBack}>
                <span className="productsHeader__blockRight__button">
                  {imgLeft}
                </span>
              </Link>
            </div>
          </div>
          <ActivitiesCard details={dataPlaces} />
          <Footer />
        </>
      </div>
    );
  }
}

export default ActivitiesPlace;
