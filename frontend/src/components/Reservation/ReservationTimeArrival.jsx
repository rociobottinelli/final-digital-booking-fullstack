import React from "react";
import ReservationSelect from "./ReservationSelect";
import { BsCheckCircle } from "react-icons/bs";

const ReservationTimeArrival = ({ handleChangeSelect }) => {
  return (
    <div>
      <div className="reservationD__time__top">
        <span className="reservationD__time__icon">
          {" "}
          <BsCheckCircle />{" "}
        </span>
        <p>Tu habitación va a estar lista para el check-in entre las 11:00hs. y las 20:00hs.</p>
      </div>
      <label className="reservationD__time__bot">Indicá tu horario estimado de llegada</label>
      <div className="reservationD__time__select">
        <ReservationSelect handleChange={handleChangeSelect} />
      </div>
    </div>
  );
};

export default ReservationTimeArrival;
