import React, { useContext } from "react";
import OpenToggleContext from "../../context/OpenToggleContext";
import "../../styles/header/logedUserNav.css";
import "../../styles/customProperties.css";
import { Link } from "react-router-dom";

const LogedUserNav = ({ handleSessionClose }) => {
  const { openNav } = useContext(OpenToggleContext);
  const userName = localStorage.getItem("userName");
  const userLastname = localStorage.getItem("userLastname");

  return (
    <div className={openNav ? "user menuItem" : "userTablet close"}>
      <div className="userContainer">
        <li className="avatar">
          {`${userName.charAt(0).toUpperCase()}${userLastname.charAt(0).toUpperCase()}`}
        </li>
        <div className="usernameComponent">
          <p>Hola,</p>
          <Link to={"/perfil"}>
            <p className="username">{`${userName.charAt(0).toUpperCase() + userName.slice(1)} ${
              userLastname.charAt(0).toUpperCase() + userLastname.slice(1)
            }`}</p>
          </Link>
        </div>
      </div>
      <p className={`logout ${openNav ? "open" : "close"}`}>
        ¿Deseas&nbsp;<li onClick={handleSessionClose}>cerrar sesión</li>?
      </p>
    </div>
  );
};

export default LogedUserNav;
