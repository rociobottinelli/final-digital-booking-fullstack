import React from "react";

const ReservationConfirmButton = ({
  handleSubmit,
  animationSuccessful,
  isDisabled,
  titleButton,
}) => {
  return (
    <div className="button__successful__container">
      <div
        onClick={handleSubmit}
        className="buttonBar"
        id={animationSuccessful === true ? "buttonBar2" : ""}
      >
        <span id="progreso" className="llenandose"></span>
      </div>

      <button
        disabled={isDisabled}
        className={
          !isDisabled
            ? "reservationD__checkout_button"
            : "reservationD__checkout_button btnDisabled"
        }
        id={animationSuccessful === true ? "buttonBar3" : ""}>
        {titleButton}
      </button>
    </div>
  );
};

export default ReservationConfirmButton;
