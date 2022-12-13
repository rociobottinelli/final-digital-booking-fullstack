import React, { useContext } from "react";
import FilterContext from "../../context/FilterContext";

const ReservationCheckIn = ({ checkInDay, checkInMounth, checkInYear }) => {
  const { checkInDate } = useContext(FilterContext);

  return (
    <div className="reservationD__checkin">
      <div>Check in</div>{" "}
      <span>
        {checkInDate === "" ? "__/__/__" : `${checkInDay}/${checkInMounth}/${checkInYear}`}
      </span>
    </div>
  );
};

export default ReservationCheckIn;
