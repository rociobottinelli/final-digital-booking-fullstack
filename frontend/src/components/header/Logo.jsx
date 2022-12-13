import React from "react";
import { Link } from "react-router-dom";
import logoDB from "../../assets/images/logo-DB.png";
import "../../styles/header/logo.css";
import "../../styles/customProperties.css";

const Logo = () => {
  return (
    <div className="logoContainer">
      <Link to={"/"}>
        <img className="logo" src={logoDB} alt="Logo Digital Booking"></img>
      </Link>
      <Link className="slogan" to={"/"}>
        <p>SENTITE COMO EN TU CASA</p>
      </Link>
    </div>
  );
};

export default Logo;
