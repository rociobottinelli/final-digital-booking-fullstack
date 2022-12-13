import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import "../styles/listImageCard.css";
import FilterContext from "../context/FilterContext";
import Loader from "../helpers/Loader";
import FilterByCityContext from "../context/FilterByCityContext";
import { baseUrl, getAllProducts, getFavByUser } from "../constants/urls";
import ProductCard from "./ProductCard";
import Paginationbottons from "./productsByPagination/PaginationBottons";
import IsLoggedContext from "../context/isLogedContext";


const ListImageCard = () => {
  const [images, setImages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [productQuantity, setProductQuantity] = useState(0);
  const { filterCity } = useContext(FilterByCityContext);
  const { filter, filterDateSearch } = useContext(FilterContext);
  const {
    filterDate,
    setFilterDate,
    searchByDate,
    searchFilter,
    setFavoritos,
  } = useContext(FilterContext);
  const { isLoged } = useContext(IsLoggedContext);
  const userId = localStorage.getItem("userId");
  
  function searchButton() {
    setFilterDate(filterDateSearch);
  }
  function setValueCalendar(arrayWithDates) {
    return (
      arrayWithDates[0] + " al " + arrayWithDates[arrayWithDates.length - 1]
    );
  }

  function sumarDias(fecha, dias) {
    fecha = new Date(fecha);
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  function getDates(arrayFechas) {
    let resultado = 0;
    arrayFechas.forEach((element) => {
      let fechaInicio = new Date(element.fechaInicio + "T00:00:00");
      let fechaFin = new Date(element.fechaFin + "T00:00:00");

      let dateArray = [];
      let currentDate = fechaInicio;
      let rangoHotelparce = [];
      let rangoCalendarparce = [];
      let rangoCalendarparceV2 = [];

      while (currentDate <= fechaFin) {
        dateArray.push(currentDate);
        currentDate = sumarDias(currentDate, 1);
      }
      dateArray.forEach((element) => rangoHotelparce.push(Date.parse(element)));
      filterDate.forEach((element) =>
        rangoCalendarparce.push(new Date(element))
      );
      rangoCalendarparce.forEach((element) =>
        rangoCalendarparceV2.push(Date.parse(element))
      );

      rangoCalendarparceV2.map((element2) => {
        if (rangoHotelparce.includes(element2)) {
          return (resultado = resultado + 1);
        } else {
          return (resultado = resultado + 0);
        }
      });
      return resultado;
    });
    return resultado;
  }

  const list = images.filter(
    (item) =>
      (filter === "" ? true : filter === item.categoria.title) &&
      (filterCity.length === 0 ? true : item.ciudad.city === filterCity) &&
      (filterDateSearch.length === 0
        ? true
        : getDates(item.reservas) > 0
        ? false
        : true)
  );

  function getImgById() {
    axios
      .get(baseUrl + getAllProducts)
      .then((response) => {
        const imagesApi = response.data;
        setImages(imagesApi);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  useEffect(() => {
    getImgById();
  }, []);

  const filteredProducts = () =>
  list.slice(productQuantity, productQuantity + 6);

  const imagesLength = list.length;

  const nextPageCount = () => {
    if (productQuantity <= images.length) {
      setProductQuantity((prevState) => prevState + 6);
      setPageCount((prevState) => prevState + 1);
    }
  };

  const prevPageCount = () => {
    if (productQuantity > 0) {
      setProductQuantity((prevState) => prevState - 6);
      setPageCount((prevState) => prevState - 1);
    }
  };

  const getfavById = useCallback(
    () => {
      function pushearFav(obj) {
        const initialState = [];
        obj.forEach((element) => initialState.push(element.producto.id));
        setFavoritos(initialState);
      }

      axios
      .get(baseUrl + getFavByUser + userId)
      .then((response) => {
        const fav = response.data;
        pushearFav(fav);
      })
      .catch((error) => console.error(`Error: ${error}`));
    },
    [setFavoritos, userId],
  )
  
  useEffect(() => {
    isLoged && getfavById();
  }, [getfavById, isLoged]);

  if (filter === "error") {
    return <div></div>;
  } else if (images.length === 0) {
    return (
      <>
        <div className="listImageContainer">
          <h2>Productos filtrados</h2>
        </div>
        <Loader />;
      </>
    );
  } else if (
    filterCity.length > 0 ||
    filter !== "" ||
    searchByDate.length > 0
  ) {
    return (
      <>
        <div className="listImageContainer">
          {(filter !== "") & (filterCity.length === 0) & (searchByDate.length === 0) ? (
            <h2>{filter + " disponibles"}</h2>
          ) : (
            ""
          )}

          {(filter !== "") & (filterCity.length === 0) & (searchByDate.length !== 0)? (
            <h2>{filter} disponibles del {setValueCalendar(searchByDate)}</h2>
          ) : (
            ""
          )}

          {(filter !== "") & (filterCity.length !== 0) & (searchByDate.length === 0) ? (
            <h2>{filter + " disponibles en " + filterCity}</h2>
          ) : (
            ""
          )}
          {(filter === "") & (filterCity.length !== 0) & (searchByDate.length === 0) ? (
            <h2>{"Alojamientos disponibles en " + filterCity}</h2>
          ) : (
            ""
          )}

          {(filter === "") & (filterCity.length !== 0) & (searchByDate.length !== 0) ? (
            <h2>Alojamientos disponibles en {filterCity} del {setValueCalendar(searchByDate)}</h2>
          ) : (
            ""
          )}

          {(filter === "") &
          (filterCity.length === 0) &
          (searchByDate.length !== 0) ? (
            <h2>Alojamientos disponibles del {setValueCalendar(searchByDate)}</h2>
          ) : (
            ""
          )}

          {(filter !== "") &
          (filterCity.length !== 0) &
          (searchByDate.length !== 0) ? (
            <h2>{filter} disponibles en {filterCity} del {setValueCalendar(searchByDate)}</h2>
          ) : (
            ""
          )}    

          {list.map((host) => (
            <ProductCard
              key={host.id}
              data={host}
              searchButton={searchButton}
            />
          ))}
        </div>
      </>
    );
  } else if (
    filterCity.length === 0 &&
    filter === "" &&
    searchByDate.length === 0 &&
    searchFilter
    ) {
    return (
      <>
        <div className="listImageContainer">
          <h2>Alojamientos disponibles</h2>
          {filteredProducts().map((host) => (
            <ProductCard
              key={host.id}
              data={host}
              searchButton={searchButton}
            />
          ))}
        </div>
        <Paginationbottons
          prevPageCount={prevPageCount}
          nextPageCount={nextPageCount}
          pageCount={pageCount}
          imagesLength={imagesLength}
        />
      </>
    );
  }
};
export default ListImageCard;
