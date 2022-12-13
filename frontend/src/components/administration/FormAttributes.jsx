import React from "react";
import {
  imgWifi,
  imgAirCond,
  imgParking,
  imgKitchen,
  imgPet,
  imgPool,
  imgTv,
} from "../../styleAux/fontAwesoneIcon";

const FormAtributes = ({ administrationForm, setAdministrationForm }) => {
  const handleChecked = (e) => {
    setAdministrationForm({
      ...administrationForm,
      attributes: { ...administrationForm.attributes, [e.target.name]: e.target.checked },
    });
  };

  return (
    <form className="checkboxContainer">
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="kitchen"
          checked={administrationForm.attributes.kitchen ? true : false}
          onChange={handleChecked}></input>
        {imgKitchen} - Cocina
      </label>      
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="airConditioning"
          checked={administrationForm.attributes.airConditioning ? true : false}
          onChange={handleChecked}></input>
        {imgAirCond} - Aire acondicionado
      </label>
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="petsAllowed"
          checked={administrationForm.attributes.petsAllowed ? true : false}
          onChange={handleChecked}></input>
        {imgPet} - Animales permitidos
      </label>
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="tv"
          checked={administrationForm.attributes.tv ? true : false}
          onChange={handleChecked}></input>
        {imgTv} - TV
      </label>      
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="pool"
          checked={administrationForm.attributes.pool ? true : false}
          onChange={handleChecked}></input>
        {imgPool} - Sala de juegos
      </label>
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="wifi"
          checked={administrationForm.attributes.wifi ? true : false}
          onChange={handleChecked}></input>
        {imgWifi} - Wifi
      </label>
      <label className="labelCheckbox">
        <input
          className="generalContainer__checkbox"
          type="checkbox"
          id="attributes"
          name="freeParking"
          checked={administrationForm.attributes.freeParking ? true : false}
          onChange={handleChecked}></input>
        {imgParking} - Estacionamiento gratuito
      </label>
    </form>
  );
};

export default FormAtributes;
