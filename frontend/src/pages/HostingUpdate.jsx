import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateTemplate from "../components/administration/hostingUpdate/UpdateTemplate";
import ProductsHeaderTop from "../components/products/ProductsHeaderTop";
import { baseUrl, getProductsById } from "../constants/urls";

const initialUpdatingForm = {
  name: "",
  category: "",
  city: "",
  description: "",
  address: "",
  latitude: "",
  length: "",
  price: "",
  title: "",
  attributes: {
    kitchen: false,
    tv: false,
    airConditioning: false,
    petsAllowed: false,
    freeParking: false,
    pool: false,
    wifi: false,
  },
  images: [],
  houseRules: { party: false, smoke: false, checkout: "" },
  healthAndSecurity: { covid: false, fireDetector: false, security: false },
  cancelationPolitics: { cancelationOne: false, cancelationTwo: false, cancelationThree: false },
};

const HostingUpdate = () => {
  const [productUpdate, setProductUpdate] = useState(initialUpdatingForm);  

  let { id } = useParams();

  useEffect(() => {
    function getProductToUpdate() {
      axios
        .get(baseUrl + getProductsById + id)
        .then(function (response) {
          const product = response.data;
          setProductUpdate({name: product.name,
          category: product.categoria.id,
          city: product.ciudad.id,
          description: product.description,
          address: product.domicilio,
          latitude: product.latitud,
          length: product.longitud,
          price: product.estadia,
          title: product.title,
          attributes: {
            kitchen: product.caracteristica.kitchen,
            tv: product.caracteristica.tv,
            airConditioning: product.caracteristica.airConditioning,
            petsAllowed: product.caracteristica.petsAllowed,
            freeParking: product.caracteristica.freeParking,
            pool: product.caracteristica.pool,
            wifi: product.caracteristica.wifi,
          },
          images: product.imagen,
          houseRules: { party: product.politicas.fiesta, smoke: product.politicas.fumar, checkout: product.politicas.checkout },
          healthAndSecurity: { covid: product.politicas.distanciamiento, fireDetector: product.politicas.detectorHumo, security: product.politicas.depositoSeguridad },
          cancelationPolitics: { cancelationOne: product.politicas.cancelacionUno, cancelationTwo: product.politicas.cancelacionDos, cancelationThree: product.politicas.cancelacionTres },});
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    getProductToUpdate();
  }, [id]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Editar alojamiento";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <ProductsHeaderTop linkProps={"/administracion/productos"} />
      <UpdateTemplate administrationForm={productUpdate} setAdministrationForm={setProductUpdate} productId={id} />
    </>
  );
};

export default HostingUpdate;
