import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import {
  imgEye,
  imgEyeSlash,
  successIcon,
  warnIcon,
} from "../styleAux/fontAwesoneIcon";
import InputComponent from "./InputComponent";
import axios from "axios";
import { baseUrl, postSignUp } from "../constants/urls";
import Loader from "../helpers/Loader";

const SignUp = () => {
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  const [nombre, setNombre] = useState({ field: "", valid: null });
  const [apellido, setApellido] = useState({ field: "", valid: null });
  const [correo, setCorreo] = useState({ field: "", valid: null });
  const [password, setPassword] = useState({ field: "", valid: null });
  const [confirmpassword, setConfirmpassword] = useState({
    field: "",
    valid: null,
  });
  const [formSignUp, setFormSignUp] = useState(null);
  const [signUpStatusError, setSignUpStatusError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpSuccessful, setSignUpSuccessful] = useState(false);

  const navigate = useNavigate();

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
    password: /^((?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-Z])).{6,12}/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const validatePassword = () => {
    if (password.field.length > 0) {
      if (password.field !== confirmpassword.field) {
        setConfirmpassword((prevState) => {
          return { ...prevState, valid: "false" };
        });
      } else {
        setConfirmpassword((prevState) => {
          return { ...prevState, valid: "true" };
        });
      }
    }
  };

  const postData = () => {
    setIsLoading(true);
    axios.post(baseUrl+ postSignUp, {
      "nombre": nombre.field,
      "apellido": apellido.field,
      "email": correo.field,
      "contrasenia": password.field,
      "roles":{
      "id": 2
      }
    })
    .then(function (response) {
      setSignUpStatusError(false);
      setSignUpSuccessful(true);
      setTimeout(() => {
        navigate("/", { replace: true });        
      }, 4000);
    })
    .catch(function (error) {
      setSignUpStatusError(true);
    })
    .finally( ()=> {
      setIsLoading(false);
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.valid === "true" &&
      apellido.valid === "true" &&
      correo.valid === "true" &&
      password.valid === "true" &&
      confirmpassword.valid === "true"
    ) {
      postData();
      setFormSignUp(true);
      setNombre({ field: "", valid: null });
      setApellido({ field: "", valid: null });
      setCorreo({ field: "", valid: null });
      setPassword({ field: "", valid: null });
      setConfirmpassword({ field: "", valid: null });
    } else {
      setFormSignUp(false);
    }
  };

  return (
    <>
      <main>
        {isLoading && <Loader />}
        <div
          className={
            signUpStatusError === false ? "formSignUp" : "errorMessageContainer"
          }
        >
          <span className="warning">{warnIcon}</span>
          <p className="errorMessage">
            Lamentablemente no ha podido registrarse. Por favor intente más
            tarde
          </p>
        </div>
        <div
          className={
            signUpSuccessful === false
              ? "formSignUp"
              : "successfulMessageContainer"
          }
        >
          <span className="warning">{successIcon}</span>
          <p className="successfulMessage">
            Para terminar su registro debe verificar su cuenta, revise su correo
            electrónico. Será redirigido al home en unos segundos
          </p>
        </div>
        <div className="form">
          <h2>Crear cuenta</h2>
          <form className="register" onSubmit={onSubmit}>
            <div className="register-input" id="fullname">
              <InputComponent
                cambiarEstado={setNombre}
                classN="full-name"
                estado={nombre}
                label="Nombre"
                name="name"
                regExp={expressions.name}
                type="text"
                messageError="Ingrese un nombre valido."
              />
              <InputComponent
                cambiarEstado={setApellido}
                classN="full-name"
                estado={apellido}
                label="Apellido"
                name="lastname"
                regExp={expressions.name}
                type="text"
                messageError="Ingrese un apellido valido."
              />
            </div>
            <div className="register-input">
              <InputComponent
                cambiarEstado={setCorreo}
                estado={correo}
                label="Correo electrónico"
                name="email"
                regExp={expressions.email}
                type="email"
                messageError="El formato de correo no es válido."
              />
            </div>
            <div className="register-input">
              <div className="pass">
                <InputComponent
                  cambiarEstado={setPassword}
                  estado={password}
                  label="Contraseña"
                  name="password"
                  regExp={expressions.password}
                  type={shown ? "text" : "password"}
                  messageError="La contraseña debe contener números, minúsculas y mayúsculas, entre 6 y 12 caracteres."
                />
                <span className="eye" onClick={switchShown}>
                  {shown ? imgEye : imgEyeSlash}
                </span>
              </div>
            </div>
            <div className="register-input">
              <InputComponent
                cambiarEstado={setConfirmpassword}
                estado={confirmpassword}
                label="Confirmar contraseña"
                name="confirmpassword"
                regExp=""
                type="password"
                messageError="Las contraseñas deben ser iguales ."
                funct={validatePassword}
              />
            </div>
            <div
              className={
                formSignUp === false ? "formSignUp" : "formSignUp-error"
              }
            >
              <p> </p>
            </div>
            <div
              className={
                formSignUp === false ? "formSignUp-error" : "formSignUp"
              }
            >
              <p> Por favor diligencie el formulario correctamente </p>
            </div>
            
            <div className="btn">
              <button type="submit" className="btn-register">
                Crear cuenta
              </button>
            </div>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/iniciar-sesion" className="link">
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
