import React, { useEffect, useState } from "react";
import FormTemplate from "../components/administration/hostingCreation/FormTemplate";
import ProductsHeaderTop from "../components/products/ProductsHeaderTop";

const initialAdministrationForm = {
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

const HostingCreation = () => {
  const [administrationForm, setAdministrationForm] = useState(initialAdministrationForm);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Crear hospedaje";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <ProductsHeaderTop linkProps={"/administracion/productos"} />
      <FormTemplate administrationForm={administrationForm} setAdministrationForm={setAdministrationForm} />
    </>
  );
};

export default HostingCreation;
