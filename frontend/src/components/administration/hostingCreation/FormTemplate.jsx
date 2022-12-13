import React, { useContext, useEffect, useState } from "react";
import "../../../styles/administration/formTemplate.css";
import FormAttributes from "../FormAttributes";
import Politics from "../Politics";
import FormGeneralData from "../FormGeneralData";
import FormImages from "../FormImages";
import axios from "axios";
import { baseUrl, postProduct } from "../../../constants/urls";
import SweetAlert from "../../../helpers/SweetAlert";
import { useNavigate } from "react-router-dom";
import IsLoggedContext from "../../../context/isLogedContext";
import ReservationConfirmButton from "../../Reservation/ReservationConfirmButton";
import FilterContext from "../../../context/FilterContext";
import OpenCarouselContext from "../../../context/OpenCarouselContext";
import OperationSuccessful from "../../../pages/OperationSuccessful";
import { warnIcon } from "../../../styleAux/fontAwesoneIcon";

window.Buffer = window.Buffer || require("buffer").Buffer;

const FormTemplate = ({ administrationForm, setAdministrationForm }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  
  const { setFlag } = useContext(IsLoggedContext);
  const { animationSuccessful, setanimationSuccessful } = useContext(FilterContext);
  const { openCarousel, handleCarousel } = useContext(OpenCarouselContext);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const validationGeneralData =
    administrationForm.name !== "" &&
    administrationForm.title !== "" &&
    administrationForm.description !== "" &&
    administrationForm.category !== "" &&
    administrationForm.address !== "" &&
    administrationForm.city !== "" &&
    administrationForm.length !== "" &&
    administrationForm.latitude !== "" &&
    administrationForm.price !== "";

  const validationImages = administrationForm.images.length >= 5;

  const validationHouseRules = administrationForm.houseRules.checkout !== "";

  useEffect(() => {
    validationGeneralData && validationImages && validationHouseRules && setIsDisabled(false);
  }, [validationGeneralData, validationImages, validationHouseRules]);

  function loaderSuccessful() {
    setanimationSuccessful(true);
    setTimeout(() => {
      handleCarousel();
    }, 4800);
  }  

  const token = JSON.parse(localStorage.getItem("userToken"));

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const data = {
    name: administrationForm.name,
    title: administrationForm.title,
    description: administrationForm.description,
    longitud: administrationForm.length,
    latitud: administrationForm.latitude,
    domicilio: administrationForm.address,
    categoria: { id: administrationForm.category },
    caracteristica: {
      kitchen: administrationForm.attributes.kitchen,
      tv: administrationForm.attributes.tv,
      airConditioning: administrationForm.attributes.airConditioning,
      petsAllowed: administrationForm.attributes.petsAllowed,
      freeParking: administrationForm.attributes.freeParking,
      pool: administrationForm.attributes.pool,
      wifi: administrationForm.attributes.wifi,
    },
    ciudad: { id: administrationForm.city },
    imagen: administrationForm.images,
    politicas: {
      checkout: administrationForm.houseRules.checkout,
      fiesta: administrationForm.houseRules.party,
      fumar: administrationForm.houseRules.smoke,
      distanciamiento: administrationForm.healthAndSecurity.covid,
      detectorHumo: administrationForm.healthAndSecurity.fireDetector,
      depositoSeguridad: administrationForm.healthAndSecurity.security,
      cancelacionUno: administrationForm.cancelationPolitics.cancelationOne,
      cancelacionDos: administrationForm.cancelationPolitics.cancelationTwo,
      cancelacionTres: administrationForm.cancelationPolitics.cancelationThree,
    },
    estadia: administrationForm.price,
    usuario: { id: userId },
  };

  console.log(administrationForm);

  const createProduct = async () => {
    try {
      await axios.post(baseUrl + postProduct, data, { headers: headers });
      loaderSuccessful();
    } catch (error) {
      console.log(error);
      const status = error.response.status;
      if (status === 401) {
        SweetAlert.messageWxpirationJwt(
          "Ooops! Ocurrió un error!",
          "Tu sesión ha caducado. Por favor volvé a iniciar sesión para realizar la reserva",
          () => {
            setFlag(true);
            navigate("/iniciar-sesion", { replace: true });
          }
        );
      } else {
        SweetAlert.messageError("Ooops! Ocurrió un error!", "Volvé a intentarlo más tarde");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationGeneralData && validationImages && validationHouseRules) {
      createProduct();
    }
  };

  return (
    <div className="formTemplateContainer">
      <h3 className="formTemplate__h3">Crear propiedad</h3>
      <FormGeneralData
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
      <h4 className="formTemplate__h4">Agregar atributos</h4>
      <FormAttributes
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
      <h4 className="formTemplate__h4">Políticas del hospedaje</h4>
      <Politics
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
      <h4 className="formTemplate__h4">Cargar imágenes</h4>
      <FormImages
        administrationForm={administrationForm}
        setAdministrationForm={setAdministrationForm}
      />
      <div className={openCarousel ? "successfull__on" : "successfull__none"}>
        <OperationSuccessful
          message={"Carga exitosa"}
          url="/administracion/productos"
          messageButton="Volver a la administración"
        />
      </div>

      <div className="formErrorContainer">
        {!administrationForm.name && (
          <p className="formError">{warnIcon} El nombre del hospedaje es requerido</p>
        )}
        {!administrationForm.title && (
          <p className="formError">{warnIcon} El título del hospedaje es requerido</p>
        )}
        {!administrationForm.description && (
          <p className="formError">{warnIcon} La descripción del hospedaje es requerida</p>
        )}
        {!administrationForm.category && (
          <p className="formError">{warnIcon} La categoría del hospedaje es requerida</p>
        )}
        {!administrationForm.address && (
          <p className="formError">{warnIcon} El domicilio del hospedaje es requerido</p>
        )}
        {!administrationForm.city && (
          <p className="formError">{warnIcon} La ciudad del hospedaje es requerida</p>
        )}
        {!administrationForm.length && (
          <p className="formError">{warnIcon} La longitug del hospedaje es requerida</p>
        )}
        {!administrationForm.latitude && (
          <p className="formError">{warnIcon} La latitud del hospedaje es requerida</p>
        )}
        {!administrationForm.price && (
          <p className="formError">{warnIcon} El precio por noche del hospedaje es requerido</p>
        )}
        {!administrationForm.houseRules.checkout && (
          <p className="formError">{warnIcon} El horario del checkout del hospedaje es requerido</p>
        )}
        {administrationForm.images.length < 5 && (
          <p className="formError">{warnIcon} Se deben cargar 5 o más imágenes con su título</p>
        )}
      </div>

      <ReservationConfirmButton
        handleSubmit={handleSubmit}
        animationSuccessful={animationSuccessful}
        isDisabled={isDisabled}
        titleButton="Crear hospedaje"
      />
    </div>
  );
};

export default FormTemplate;
