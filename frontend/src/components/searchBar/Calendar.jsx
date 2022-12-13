import React from "react";
import "react-multi-date-picker/styles/colors/teal.css";
import "../../styles/searchBar/calendar.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import MediaQuery from "react-responsive";
import DatepickerCustom from "./DatepickerCustom";

function Calendar() {
  return (
    <>
      <div className="calendar__picker">
        <MediaQuery minWidth={768}>
          <DatepickerCustom
            numberOfMonths={2}
            className={"custom-calendar teal doubleDatePicker"}
          />
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <DatepickerCustom
            numberOfMonths={2}
            className={"custom-calendar teal singleDatePicker"}
          />
        </MediaQuery>
      </div>
    </>
  );
}

export default Calendar;
