import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { imgEye, imgEyeSlash, warnIcon } from "../styleAux/fontAwesoneIcon";
import InputComponent from "./InputComponent";
import SweetAlert from "../helpers/SweetAlert";
import axios from "axios";
import IsLoggedContext from "../context/isLogedContext";
import { baseUrl, postLogin } from "../constants/urls";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [shown, setShown] = useState(false);
  const [correo, setCorreo] = useState({ field: "", valid: null });
  const [password, setPassword] = useState({ field: "", valid: null });
  const [formLogin, setFormLogin] = useState(null);
  const { flag, setFlag, setIsLoged } = useContext(IsLoggedContext);

  const navigate = useNavigate();

  const productId = sessionStorage.getItem("productId");
  const productLocation = sessionStorage.getItem("productLocation");

  const switchShown = () => setShown(!shown);

  const expressions = {
    password: /^((?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-Z])).{6,12}/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (correo.valid === "true" && password.valid === "true") {
      postUser();
    }
  };

  const postUser = async () => {
    try {
      const response = await axios.post(baseUrl + postLogin, {
        email: correo.field,
        contrasenia: password.field,
      });

      const token = response.data.tokenDeAcceso;
      const decod = jwt_decode(token);

      const { nombre, apellido, id, sub, rol } = decod;

      setFormLogin(true);
      if (token) {
        localStorage.setItem("userName", `${nombre}`);
        localStorage.setItem("userLastname", `${apellido}`);
        localStorage.setItem("userId", `${id}`);
        localStorage.setItem("userEmail", `${sub}`);
        localStorage.setItem("login", true);
        localStorage.setItem("rol", rol);
        localStorage.setItem("userToken", JSON.stringify(token));
        setIsLoged(localStorage.getItem("login"));

        SweetAlert.messageLoginOk("Aguarde mientras se procesa la información", () =>
          flag ? (
            <>
              {setFlag(false)}
              {navigate(
                `/alojamientos/${productId}/${productLocation.replace(/[+ ]|%20/g, "-")}/reservar`,
                { replace: true }
              )}
            </>
          ) : (
            navigate("/", { replace: true })
          )
        );
      } else {
        setFormLogin(false);
        localStorage.setItem("userToken", JSON.stringify(token));
        setIsLoged(localStorage.getItem("login"));
      }
    } catch (error) {
      console.log("Ooops! Ocurrió un error!", error);
      const resError = error.response.status;
      setFormLogin(false);
      setIsLoged(false);

      if (resError === 404) {
        SweetAlert.messageError(
          ("Ooops! Ocurrió un error!",
          "La cuenta no ha sido verificada, por favor verificala desde tu email")
        );
      } else if (resError === 401) {
        SweetAlert.messageError("Ooops! Ocurrió un error!", "Usuario y/o contraseña incorrectas");
      } else {
        SweetAlert.messageError("Ooops! Ocurrió un error!", "Intente nuevamente más tarde");
      }      
    }
  };

  return (
    <>
      <main>
        {flag ? (
          <div className="flagMessageContainer">
            {warnIcon}
            <p className="flagMessage">Para realizar una reserva, necesitas estar logueado</p>
          </div>
        ) : (
          ""
        )}
        <div className="form">
          <h2>Iniciar sesión</h2>
          <form className="login" onSubmit={onSubmit}>
            <div className="login-input">
              <InputComponent
                cambiarEstado={setCorreo}
                estado={correo}
                label="Correo electrónico"
                name="email"
                regExp={expressions.email}
                type="email"
                value={correo}
                messageError="El formato de correo no es válido."
              />
            </div>
            <div className="login-input">
              <div className="pass">
                <InputComponent
                  cambiarEstado={setPassword}
                  estado={password}
                  label="Contraseña"
                  name="password"
                  regExp={expressions.password}
                  type={shown ? "text" : "password"}
                  value={password}
                  messageError="La contraseña debe tener ser de 6 a 12 caracteres, debe contener números, minúsculas y mayúsculas."
                />
                <span className="eye" onClick={switchShown}>
                  {shown ? imgEye : imgEyeSlash}
                </span>
              </div>
            </div>
            <div
              className={
                formLogin === true || formLogin === null ? "formLogin" : "formLogin-error"
              }>
              <p> Por favor vuelva a intentarlo, sus credenciales son inválidas.</p>
            </div>
            <div className="btn">
              <button type="submit" className="btn-login">
                Ingresar
              </button>
            </div>
            <p>
              ¿Aún no tenes cuenta?{" "}
              <Link to="/crear-cuenta" className="link">
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
