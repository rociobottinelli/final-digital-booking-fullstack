import React, { useContext } from "react";
import "../styles/footer.css";
import "../styles/customProperties.css";
import OpenToggleContext from "../context/OpenToggleContext";
import SocialNet from "./SocialNet";

const Footer = () => {
  const { openNav } = useContext(OpenToggleContext);

  return (
    <footer>
      <h4>©2022 Digital Booking</h4>
      {!openNav && (
        <div className="socialNet">
          <SocialNet />
        </div>
      )}
    </footer>
  );
};

export default Footer;
