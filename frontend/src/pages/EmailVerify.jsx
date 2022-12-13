import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, getVerificationCode } from "../constants/urls";
import { Link, useParams } from "react-router-dom";
import "../styles/emailVerify.css";
import monkeyCrying from "../assets/images/monkey-crying.png";
import monkeyHappy from "../assets/images/monkey-happy.jpg";

const EmailVerifyOk = () => {
  const [status, setStatus] = useState(0);
  const code = useParams();

  useEffect(() => {
    const getVerify = async () => {
      try {
        const res = await axios.get(`${baseUrl}${getVerificationCode}${code.code}`);
        setStatus((prevState) => prevState + res.status);
      } catch (error) {
        console.log(error);
        const resError = error.response.status;
        setStatus((prevState) => prevState + resError);
      }
    };
    getVerify();
  }, [code.code]);

  return (
    <>
      <div className="verificationContainer">
        <h2 className="verificationH2">Verificación de cuenta</h2>
        {status === 200 ? (
          <>
            <h3>Felicitaciones! tu cuenta fue verificada exitosamente</h3>
            <img src={monkeyHappy} alt="Mono feliz" />
          </>
        ) : (
          <>
            <h3>Ups! No se pudo verificar tu cuenta</h3>
            <img src={monkeyCrying} alt="Mono llorando" />
          </>
        )}
        {status === 200 ? (
          <div className="CodeContainer">
            <p>Por favor, redirigite a iniciar sesión</p>
            <Link className="verificationAnchor" to="/iniciar-sesion">
              Ir a iniciar sesión
            </Link>
          </div>
        ) : (
          <div className="CodeContainer">
            <p>El código de verificación es incorrecto</p>
            <p>Por favor, intente de nuevo</p>
            <Link className="verificationAnchor" to="/">
              Ir a home
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default EmailVerifyOk;
