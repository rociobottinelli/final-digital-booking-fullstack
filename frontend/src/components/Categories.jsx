import React, { useState, useContext } from "react";
import "../styles/categories.css";
import axios from "axios";
import { useEffect } from "react";
import FilterContext from "../context/FilterContext";
import ErrorMono from "../helpers/ErrorMono";
import Loader from "../helpers/Loader";
import { baseUrl, getAllCategories } from "../constants/urls";

function Categories() {
  const [categories, setCategories] = useState([]);
  const { filter, setFilter, setCleanerButtonClass } = useContext(FilterContext);

  function setFilterAndButton(categ) {
    setFilter(filter !== categ.title ? categ.title : "");
    setCleanerButtonClass("on");
  }
  
  useEffect(() => {
    function getCategories() {
      axios
        .get(baseUrl + getAllCategories)
        .then((response) => {
          const categories = response.data;
          setCategories(categories);
        })
        .catch((error) => {
          console.log(error);
          setFilter("error");
        });
    }
    getCategories();
  }, [setFilter]);

  if (filter === "error") {
    return (
      <div>
        <ErrorMono />
      </div>
    );
  } else if (categories.length === 0) {
    return (
      <>
        <div className="categoriesContainer">
          <h2>Buscar por tipo de alojamiento</h2>
        </div>
        <Loader />;
      </>
    );
  } else {
    return (
      <>
        <div className="categoriesContainer">
          <div className="headingCards">
            <h2>Buscar por tipo de alojamiento</h2>
            {categories.map((categ) => {
              return (
                <div
                  id={filter === categ.title ? "categoriesCard__select__" + categ.id : ""}
                  className="categoriesCard"
                  key={categ.id.toString()}
                  onClick={() => setFilterAndButton(categ)}>
                  <img src={categ.imgUrl} alt={categ.title} />
                  <div>
                    <h3>{categ.title}</h3>
                    <h5>{`${categ.productos} ${categ.title}`}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Categories;
