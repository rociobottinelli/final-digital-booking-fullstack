import React, { useContext } from "react";
import Calendar from "./Calendar";
import "../../styles/searchBar/search.css";
import { imgCalendar } from "../../styleAux/fontAwesoneIcon";
import SelectA from "./SelectA";
import FilterByCityContext from "../../context/FilterByCityContext";
import FilterContext from "../../context/FilterContext";
import { DateObject } from "react-multi-date-picker";

const Search = () => {
  const { setFilterCity, filterCity2 } = useContext(FilterByCityContext);
  const { setFilterDate, filterDateSearch, setValueCalendar, setSearchByDate, setSearchFilter, setCleanerButtonClass } =
    useContext(FilterContext);

  function setPlaceholder(arrayWithDates) {
    if (filterDateSearch.length === 0) {
      return "Check in - Check out";
    } else {
      setValueCalendar([
        new DateObject(arrayWithDates[0]),
        new DateObject(arrayWithDates[arrayWithDates.length - 1]),
      ]);
    }
  }
  function SearchButton() {
    setFilterCity(filterCity2);
    setFilterDate(filterDateSearch);
    setPlaceholder(filterDateSearch);
    setSearchByDate(filterDateSearch)
    setSearchFilter(true);
    setCleanerButtonClass("on");
  }
  return (
    <div>
      <div className="searchDiv">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <div className="searchForm">
          <div className="searchForm__select">
            <SelectA />
          </div>

          <div className="containerCalendar">
            <span className="customIconCalendar">{imgCalendar}</span>
            <Calendar className="calendarSearch" />
          </div>
          <button
            className="searchButton"
            type="submit"
            onClick={() => SearchButton()}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
