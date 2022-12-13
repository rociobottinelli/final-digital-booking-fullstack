import React, { useState, useEffect } from "react";
import ProductsCalendar from "../components/products/ProductsCalendar";
import ProductsDescription from "../components/products/ProductsDescription";
import ProductsFeatures from "../components/products/ProductsFeatures";
import ProductsHeader from "../components/products/ProductsHeader";
import ProductsImg from "../components/products/ProductsImg";
import ProductsLocation from "../components/products/ProductsLocation";
import ProductsPolitics from "../components/products/ProductsPolitics";
import axios from "axios";
import "../styles/title.css"
import { useParams } from "react-router-dom";
import { baseUrl, getProductsById } from "../constants/urls";
import Loader from "../helpers/Loader";
import ErrorMono from "../helpers/ErrorMono";
import ActivitiesCardMain from "../components/activities/ActivitiesCardMain";
import Title from "../components/Title";
import ProductsReviews from "../components/products/ProductsReviews";


const initialProductDetails = {
  id: "",
  name: "",
  description: "",
  categoria: {
    id: "",
    title: "",
    description: "",
    imgUrl: "",
  },
  ciudad: {
    id: "",
    city: "",
    pais: {
      id: "",
      pais: "",
    },
  },
  imagen: [
    {
      id: "",
      title: "",
      url: "",
    },
    {
      id: "",
      title: "",
      url: "",
    },
    {
      id: "",
      title: "",
      url: "",
    },
    {
      id: "",
      title: "",
      url: "",
    },
    {
      id: "",
      title: "",
      url: "",
    },
  ],
};

const Products = () => {
  const [prueba, setprueba] = useState([]);
  const [productDetails, setProductDetails] = useState(initialProductDetails);
  const [error, setError] = useState(false);
  let { id, location } = useParams();
  const [city, setCity] = useState([]);

  sessionStorage.setItem("productId", id);
  sessionStorage.setItem("productLocation", location);

  const volverA = "/alojamientos/" + id + "/" + location;

  let lugares = [];

  function getLugares() {
    if (productDetails.ciudad.city.length > 0)
      axios
        .get(baseUrl + "lugares/ciudades/" + productDetails.ciudad.city)
        .then((response) => {
          setCity(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
  }
  useEffect(() => {
    axios
      .get(baseUrl + getProductsById + id)
      .then((response) => {
        const product = response.data;
        setProductDetails(product);
        setprueba(product);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    getLugares();
  }, [productDetails.ciudad.city.length > 0]);
  if (error) {
    return <ErrorMono />;
  } else if (productDetails === initialProductDetails) {
    return <Loader />;
  } else {
    return (
      <>
        <ProductsHeader productDetails={prueba} />
        <ProductsImg productDetails={productDetails} />
        <ProductsDescription productDetails={productDetails} />
        <ProductsFeatures productDetails={productDetails} />
        
        <ProductsCalendar productDetails={prueba} />
        <Title title={"Lugares turísticos cercanos"}/>
        <ActivitiesCardMain
          dataPlaces={city}
          filterArrayPlaces={lugares}
          volverA={volverA}
          id={"background__places"}
        />
        <ProductsLocation productDetails={productDetails} />
        <ProductsReviews productDetails={productDetails} />
        <ProductsPolitics productDetails={productDetails} />
      </>
    );
  }
};

export default Products;
