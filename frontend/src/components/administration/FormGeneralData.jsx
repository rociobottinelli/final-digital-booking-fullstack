import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import "../../styles/administration/formSelect.css";
import selectStyle from "../../styles/administration/selectStyle";
import { baseUrl, getAllCategories, getAllCities } from "../../constants/urls";

const FormGeneralData = ({ administrationForm, setAdministrationForm }) => {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getCategories = async () => {
      try {
        const res = await axios.get(baseUrl + getAllCategories, { signal });
        setCategories(res.data);
      } catch (error) {
        console.log("Error getCategories()", error);
      }
    };
    getCategories();

    return () => abortController.abort;
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const getCities = async () => {
      try {
        const res = await axios.get(baseUrl + getAllCities, { signal });
        setCities(res.data);
      } catch (error) {
        console.log("Error getCategories()", error);
      }
    };
    getCities();

    return () => abortController.abort;
  }, []);

  const handleChange = (e) => {
    setAdministrationForm({
      ...administrationForm,
      [e.target.name]: e.target.value,
    });
  };

  const categorySelect = categories.find((cat) => cat.id === administrationForm.category);
  const citySelect = cities.find((city) => city.id === administrationForm.city);

  return (
    <form className="generalContainer">
      <div className="generalContainer__divInput">
        <label htmlFor="name">Nombre hospedaje</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Ingresá nombre hospedaje"
          value={administrationForm.name}
          required
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="category">Categoría</label>
        <Select
          id="category"
          placeholder={administrationForm.category ? categorySelect.title : "Seleccioná una categoría"}
          styles={selectStyle}
          autoFocus={"false"}
          options={categories.map((cat) => ({
            value: cat.title,
            text: cat.title,
            target: {
              name: "category",
              value: cat.id,
              text: cat.title,
            },
          }))}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div className="select">
              <div className="select__cities">
                <p>{e.value}</p>
              </div>
            </div>
          )}
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
          placeholder="Ingresá la dirección del hospedaje"
          value={administrationForm.address}
          required
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="city">Ciudad</label>
        <Select
          id="city"
          styles={selectStyle}
          placeholder={administrationForm.city ? citySelect.city : "Seleccioná una ciudad"}
          autoFocus={"false"}
          options={cities.map((city) => ({
            value: city.city,
            text: `${city.city}, ${city.pais.pais}`,
            target: {
              name: "city",
              value: city.id,
              text: `${city.city}, ${city.pais.pais}`,
            },
          }))}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div className="select">
              <div className="select__cities">
                <p>{e.text}</p>
              </div>
            </div>
          )}
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="latitude">Latitud de Google</label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          onChange={handleChange}
          placeholder="Ingresá la latitud del hospedaje"
          value={administrationForm.latitude}
          required
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="length">Longitud de Google</label>
        <input
          type="text"
          id="length"
          name="length"
          onChange={handleChange}
          placeholder="Ingresá la latitud del hospedaje"
          value={administrationForm.length}
          required
        />
      </div>
      <div className="generalContainer__divInput divInputDescription">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          placeholder="Ingresá una descripción del hospedaje"
          minLength="20"
          maxLength="500"
          rows="8"
          cols="50"
          value={administrationForm.description}
          required
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="title">Título descriptivo</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          placeholder="Ingresá un título"
          value={administrationForm.title}
          required
        />
      </div>
      <div className="generalContainer__divInput">
        <label htmlFor="price">Precio por noche</label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          placeholder="Ingresá el valor en pesos argentinos"
          value={administrationForm.price}
          required
        />
      </div>
    </form>
  );
};

export default FormGeneralData;
