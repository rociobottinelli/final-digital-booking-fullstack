import { createContext, useState } from "react";

const FilterByCityContext = createContext();

const initialFilter = [];

const FilterCityProvider = ({ children }) => {
  const [filterCity, setFilterCity] = useState(initialFilter);
  const [filterCity2, setFilterCity2] = useState(initialFilter);
  const [placeholder, setPlaceholder] = useState("¿A dónde vamos?");
  const [fav, setFav] = useState(["Piponeta Hostel"]);

  const [filterCityPlace, setFilterCityPlace] = useState(initialFilter);
  const [filterCityPlace2, setFilterCityPlace2] = useState(initialFilter);
  const [placeholderPlace, setPlaceholderPlace] = useState("¿A dónde vamos?");
  const [filterArrayPlaces, setFilterArrayPlaces] = useState(initialFilter);

  const data = {
    filterCity,
    setFilterCity,
    filterCity2,
    setFilterCity2,
    placeholder,
    setPlaceholder,
    fav,
    setFav,
    filterCityPlace,
    setFilterCityPlace,
    filterCityPlace2,
    setFilterCityPlace2,
    placeholderPlace,
    setPlaceholderPlace,
    filterArrayPlaces,
    setFilterArrayPlaces,
  };

  return (
    <FilterByCityContext.Provider value={data}>
      {children}
    </FilterByCityContext.Provider>
  );
};

export { FilterCityProvider };

export default FilterByCityContext;
