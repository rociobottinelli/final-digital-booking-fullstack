import React, { useState, useEffect } from "react";
import "../../styles/profile/personalDates.css";
import axios from "axios";
import { baseUrl } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import SweetAlert from "../../helpers/SweetAlert";

function PersonalDates() {
  const userId = localStorage.getItem("userId");
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setemail] = useState("");
  const [celular, setcelular] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [rol, setRol] = useState("");

  const [isDisabled, setisDisabled] = useState(true);
  const [isDisabledPW, setisDisabledPW] = useState(true);
  const [errorPw, seterrorPw] = useState("none");

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("userToken"));

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleChangeName = (e) => {
    setnombre(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setapellido(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setemail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setcelular(e.target.value);
  };
  const handleChangePW = (e) => {
    setpassword(e.target.value);
    if (password === passwordRepeat && passwordRepeat.length > 5) {
      seterrorPw("none");
    } else {
      seterrorPw("");
    }
  };
  const handleChangePW2 = (e) => {
    setpasswordRepeat(e.target.value);
    if (password === e.target.value && e.target.value.length > 5) {
      seterrorPw("none");
    } else {
      seterrorPw("");
    }
  };

  const [classChanges, setclassChanges] = useState("");
  const [classChanges2, setclassChanges2] = useState("");

  function changesApplicated2() {
    setclassChanges2("menu");
    setTimeout(() => {
      setclassChanges2("");
    }, 4000);
  }

  function changesApplicated() {
    setclassChanges("menu");
    setTimeout(() => {
      setclassChanges("");
    }, 4000);
  }

  const data = {
    id: userId,
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: celular,
    roles: rol,
  };

  const dataPW = {
    id: userId,
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: celular,
    contrasenia: password,
    roles: rol,
  };

  const updateProfile = async () => {
    try {
      await axios
        .put(baseUrl + "usuarios/updateUser", data, {
          headers: headers,
        })
        .then((response) => {
          changesApplicated();
          localStorage.setItem("userLastname", data.apellido);  
          localStorage.setItem("userName", data.nombre);
        });
    } catch (error) {
      console.log(error);
      const status = error.response.status;
      if (status === 401) {
        SweetAlert.messageWxpirationJwt(
          "Ooops! Ocurrió un error!",
          "Tu sesión ha caducado. Por favor volvé a iniciar sesión para realizar la reserva",
          () => {
            navigate("/iniciar-sesion", { replace: true });
          }
        );
      } else {
        SweetAlert.messageError("Ooops! Ocurrió un error!", "Volvé a intentarlo más tarde");
      }
    }
  };

  const updatePassword = async () => {
    try {
      await axios
        .put(baseUrl + "usuarios/updatePassword", dataPW, {
          headers: headers,
        })
        .then((response) => {
          seterrorPw("none");
          changesApplicated2();
        });
    } catch (error) {
      console.log(error);
      const status = error.response.status;
      if (status === 401) {
        SweetAlert.messageWxpirationJwt(
          "Ooops! Ocurrió un error!",
          "Tu sesión ha caducado. Por favor volvé a iniciar sesión para realizar la reserva",
          () => {
            navigate("/iniciar-sesion", { replace: true });
          }
        );
      } else {
        SweetAlert.messageError("Ooops! Ocurrió un error!", "Volvé a intentarlo más tarde");
      }
    }
  };

    const passwordRegex =  /^((?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-Z])).{6,12}/;

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  function setValues(data) {
    setnombre(data.nombre);
    setapellido(data.apellido);
    setemail(data.email);
    setcelular(data.telefono);
    setpassword(data.contrasenia);
    setpasswordRepeat("");
    setRol(data.roles);
  }

  useEffect(() => {
    function getDatesByUser() {
      axios
        .get(baseUrl + "usuarios/" + userId)
        .then((response) => {
          setValues(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    getDatesByUser();
  }, [userId]);

  const validateCondition1 = nombre.length > 0;
  const validateCondition2 = apellido.length > 0;
  const validateCondition3 = emailRegex.test(email);
  const validateCondition4 = password === passwordRepeat;
  const validateCondition5 = passwordRepeat.length > 5;
  const validateCondition6 = passwordRegex.test(password)

  useEffect(() => {
    validateCondition1 && validateCondition2 && validateCondition3
      ? setisDisabled(true)
      : setisDisabled(false);
  }, [validateCondition1, validateCondition2, validateCondition3]);

  useEffect(() => {
    validateCondition4 && validateCondition5 && validateCondition6? setisDisabledPW(true) : setisDisabledPW(false);
  }, [validateCondition4, validateCondition5, validateCondition6]);
  return (
    <div className="personalDates">
      <div className="movements">
        <div className="movements__title">
          <span>Datos&nbsp;</span> personales
        </div>
        <div className="movements__title2">
          A continuación podrás ver y modificar tus datos personales.
        </div>
      </div>

      <div className="personalDates__container">
        <form className="reservationD__dates" id="personalDates__form">
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingrese nombre"
              value={nombre}
              onChange={handleChangeName}></input>
            {!nombre && <p className="formError">El nombre es requerido</p>}
          </div>
          <div>
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Ingrese apellido"
              value={apellido}
              onChange={handleChangeLastName}></input>
            {!apellido && <p className="formError">El apellido es requerido</p>}
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese email. Ejemplo: usuario@digitalhouse.com"
              value={email}
              onChange={handleChangeEmail}></input>
            {!emailRegex.test(email) && (
              <p className="formError">No es un formato de email válido</p>
            )}
          </div>
          <div>
            <label htmlFor="phone">Celular de contacto</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ingrese celular"
              pattern="^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$"
              value={celular}
              onChange={handleChangePhone}></input>
          </div>
        </form>
        <div className="personalDates__container__button">
          <button
            onClick={updateProfile}
            className={isDisabled ? "" : "btnDisabled"}
            disabled={!isDisabled}>
            Guardar Cambios
          </button>
        </div>
        <div className="personalDatesButton changes" id={classChanges}>
          <span>
            <span>Cambios Aplicados!</span>
          </span>
        </div>
      </div>

      <div className="movements">
        <div className="movements__title">
          <span>Cambio de&nbsp;</span> contraseña
        </div>
        <div className="movements__title2">
          Si lo necesitas, en el próximo formulario podrás cambiar tus credenciales de ingreso.
        </div>
      </div>
      <div className="personalDates__container">
        <form className="reservationD__dates" id="personalDates__form2">
          <div>
            <label htmlFor="new-password">Nueva Contraseña</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              placeholder="************"
              autoComplete="on"
              onChange={handleChangePW}
              onBlur={handleChangePW}
              pattern="^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$"></input>
          </div>
          <div>
            <label htmlFor="contrasenia2">Repetir Contraseña</label>
            <input
              type="password"
              id="contrasenia2"
              name="contrasenia2"
              placeholder="Repita la nueva contraseña si desea cambiar la actual"
              autoComplete="on"
              onChange={handleChangePW2}
              pattern="^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$"></input>
            <p id={errorPw} className="formError__dates">
            Las contraseña deben ser iguales, contener números, minúsculas, mayúsculas y entre 6 y 12 caracteres.
            </p>
          </div>
        </form>
        <div className="personalDates__container__button">
          <button
            className={isDisabledPW ? "personalDates__button" : "btnDisabled"}
            disabled={!isDisabledPW}
            onClick={updatePassword}>
            Cambiar contraseña
          </button>
        </div>
        <div className="personalDatesButton changes" id={classChanges2}>
          <span>
            <span>Cambios Aplicados!</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonalDates;
