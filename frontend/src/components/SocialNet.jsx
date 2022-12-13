import React from "react";
import { imgLinkedin, imgFacebook, imgTwitter, imgInstagram } from "../styleAux/fontAwesoneIcon";

const SocialNet = () => {
  return (
    <>
      <a
        href="https://www.facebook.com/Digital-Booking-108231588607352/"
        target="_blank"
        rel="noreferrer">
        <button>{imgFacebook}</button>
      </a>
      <a
        href="https://www.linkedin.com/company/digital-booking-grupo5/"
        target="_blank"
        rel="noreferrer">
        <button>{imgLinkedin}</button>
      </a>
      <a href="https://twitter.com/booking_digital" target="_blank" rel="noreferrer">
        <button>{imgTwitter}</button>
      </a>
      <a href="https://www.instagram.com/digitalbooking_/" target="_blank" rel="noreferrer">
        <button>{imgInstagram}</button>
      </a>
    </>
  );
};

export default SocialNet;
