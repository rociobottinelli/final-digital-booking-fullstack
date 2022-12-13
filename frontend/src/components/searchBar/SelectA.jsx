import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import axios from "axios";
import "../../styles/searchBar/select.css";
import FilterByCityContext from "../../context/FilterByCityContext";
import { baseUrl, getAllCities } from "../../constants/urls";
import gps1 from "./img/gps1.png";
import gps2 from "./img/gps2.png";
import FilterContext from "../../context/FilterContext";

const SelectA = () => {
  const [,] = useState("¿A dónde vamos?");
  const {
    setFilterCity,
    setFilterCity2,
    placeholder,
    setPlaceholder,
  } = useContext(FilterByCityContext);
  const { setCleanerButtonClass, filter, searchByDate } = useContext(FilterContext);

  const handleSelectChange = (e) => {
    const city = e.value + ", " + e.text;
    setPlaceholder(city);
    setFilterCity2(e.value);
  };

  const handleClear = (e) => {
    setPlaceholder("¿A dónde vamos?");
    setFilterCity("");
    setFilterCity2([]);
    if ((filter === "" & searchByDate.length === 0)) {
      setCleanerButtonClass("off");
    }
  };
  const [citiesAll, setCitiesAll] = useState([]);

  function getCitiesAll() {
    axios
      .get(baseUrl + getAllCities)
      .then((response) => {
        const citiesA = response.data;
        setCitiesAll(citiesA);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getCitiesAll();
  }, []);

  const styles = {
    option: () => ({
      borderBottom: "solid 2px #1dbeb4",
      padding: "0.5rem 2.5rem",
      position: "relative",
      ":after": {
        backgroundImage: `url(${gps1})`,
        backgroundRepeat: "no-repeat",
        content: '" "',
        display: "block",
        height: "25px",
        marginRight: "8px",
        left: "12px",
        position: "absolute",
        top: "16px",
        width: "25px",
      },
      ":hover": {
        backgroundColor: "#F3F3F4",
        cursor: "pointer",
      },
      ":last-child": {
        borderBottom: "none",
      },
    }),
    control: (styles) => ({
      ...styles,
      height: "05px",
      maxWidth: "100%",
      overflow: "hidden",
      paddingLeft: "32px",
      ":before": {
        backgroundImage: `url(${gps2})`,
        backgroundRepeat: "no-repeat",
        content: '" "',
        display: "block",
        height: "25px",
        marginRight: "8px",
        left: "10px",
        position: "absolute",
        top: "5px",
        width: "25px",
      },
    }),
  };

  return (
    <>
      <Select
        styles={styles}
        autoFocus={"false"}
        options={citiesAll.map((city) => ({
          value: city.city,
          text: city.pais.pais,
        }))}
        onChange={handleSelectChange}
        getOptionLabel={(e) => (
          <div className="select">
            <div className="select__cities">
              <p>{e.value}</p>
              <span>{e.text}</span>
            </div>
          </div>
        )}
        value={{ value: placeholder }}
      />
      <span
        className={
          placeholder !== "¿A dónde vamos?"
            ? "select__clear"
            : "select__clear__none"
        }
        onClick={handleClear}
      >
        X
      </span>
    </>
  );
};

export default SelectA;
