import React, { useState, useContext } from "react";
import DatePicker, { getAllDatesInRange } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import FilterContext from "../../context/FilterContext";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const weekDays = ["D", "L", "M", "M", "J", "V", "S"];

const DatepickerCustom = (props) => {
  const [allDates, setAllDates] = useState([]);
  const {
    setFilterDateSearch,
    placeholderCalendar,
    valueCalendar,
    setCheckInDate,
    setCheckOutDate,
  } = useContext(FilterContext);

  function getDate() {
    let arrayObtenido = [];
    allDates.forEach((date) => arrayObtenido.push(date.format()));
    setFilterDateSearch(arrayObtenido);
    if (arrayObtenido.length > 0) {
      setCheckInDate(new Date(arrayObtenido[0]));
      setCheckOutDate(new Date(arrayObtenido[arrayObtenido.length - 1]));
    } else {
      setCheckInDate("");
      setCheckOutDate("");
    }
  }
  return (
    <>
      <DatePicker
        value={valueCalendar}
        onClose={() => getDate()}
        onChange={(dateObjects) => {
          setAllDates(getAllDatesInRange(dateObjects));
        }}
        offsetY={20}
        offsetX={1}
        minDate={new Date()}
        hideYear
        placeholder={placeholderCalendar}
        weekDays={weekDays}
        numberOfMonths={props.numberOfMonths}
        animations={[transition()]}
        range
        months={months}
        format="YYYY/MM/DD"
        className={props.className}
        arrow={false}
        inputClass="custom-input"
        containerClassName="date"
        plugins={[
          <Footer
            position="bottom"
            format="MMM DD"
            names={{
              from: "Desde:",
              to: "Hasta:",
              selectDate: "-",
              close: "Aplicar",
            }}
          />,
        ]}
      ></DatePicker>
    </>
  );
};

export default DatepickerCustom;
