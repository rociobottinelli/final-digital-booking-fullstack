import React, { useContext } from "react";
import FilterContext from "../../context/FilterContext";

const ReservationCheckOut = ({ checkOutDay, checkOutMounth, checkOutYear }) => {
  const { checkOutDate } = useContext(FilterContext);

  return (
    <div className="reservationD__checkout">
      <div>Check out</div>{" "}
      <span>
        {checkOutDate === "" || checkOutDate === null
          ? "__/__/__"
          : `${checkOutDay}/${checkOutMounth}/${checkOutYear}`}
      </span>
    </div>
  );
};

export default ReservationCheckOut;
