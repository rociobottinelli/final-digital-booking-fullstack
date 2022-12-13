import React, { useContext } from "react";
import FilterContext from "../context/FilterContext";
import FilterByCityContext from "../context/FilterByCityContext";
import "../styles/cleanerButton.css"

function CleanerButton() {
    const { setFilterCity, setFilterCity2,setPlaceholder,  } = useContext(FilterByCityContext);
  const {
    setFilterDateSearch,
    setplaceholderCalendar,
    setFilterDate,
    setCheckInDate,
    setFilter,
    setCheckOutDate,
    setValueCalendar,
    setSearchFilter,
    setSearchByDate,
    cleanerButtonClass,
     setCleanerButtonClass
  } = useContext(FilterContext);

  function clearnerFilters() {
    setCheckOutDate("");
    setCheckInDate("");
    setValueCalendar("Check In - Check Out");
    setplaceholderCalendar("Check In - Check Out");
    setFilterDateSearch([]);
    setFilter("");
    setFilterDate([]);
    setFilterCity([]);
    setFilterCity2([]);
    setPlaceholder("¿A dónde vamos?");
    setSearchFilter(false);
    setSearchByDate([]);
    setCleanerButtonClass("off")
  }

  return (
    <div className={cleanerButtonClass === "on" ? "cleanerButton" : "none"}>
      <button onClick={() => clearnerFilters()}>Limpiar filtros 🧹</button>
    </div>
  );
}

export default CleanerButton;
