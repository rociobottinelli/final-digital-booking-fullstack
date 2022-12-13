import React, { useContext } from "react";
import "../styles/reservation/reservationSuccessful.css";
import monoSucc from "../assets/images/mono_successful.png";
import { BsCheckCircle } from "react-icons/bs";
import OpenCarouselContext from "../context/OpenCarouselContext";
import { Link } from "react-router-dom";
import FilterContext from "../context/FilterContext";

function OperationSuccessful({message, url, messageButton}) {

  const { handleCarousel } = useContext(OpenCarouselContext);
  const { setanimationSuccessful } = useContext(FilterContext);
  function loaderSuccessful() {
    setanimationSuccessful(false);
    handleCarousel();
  }

  return (
    <div>
      <img className="mono__succs" src={monoSucc} alt="Reserva exitosa!"></img>
      <div className="reservationSuccessful">
        <h2>{message}</h2>
        <span className="icon__successfull">
          <BsCheckCircle />
        </span>
        <Link to={url}>
          <button onClick={loaderSuccessful} className="button__successful">
            {messageButton}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OperationSuccessful;
