import React, { useEffect, useContext } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import "../../styles/products/productsCalendar.css";
import FilterContext from "../../context/FilterContext";

registerLocale("es", es);

function ProductsDatePicker({ productDetails, pickerDisabled }) {
  const { checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, setContainsDisabledDates} =
    useContext(FilterContext);
  const productReservas = productDetails.reservas;
  const optionPicker = pickerDisabled;

  function sumarDias(fecha, dias) {
    fecha = new Date(fecha);
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  function getDates(arrayFechas) {
    const datosAExcluir = [];
    arrayFechas.forEach((element) => {
      const fechaInicio = new Date(element.fechaInicio + "T00:00:00");
      const fechaFin = new Date(element.fechaFin + "T00:00:00");
      const dateArray = [];
      let currentDate = fechaInicio;

      while (currentDate <= fechaFin) {
        dateArray.push(currentDate);
        currentDate = sumarDias(currentDate, 1);
      }
      dateArray.map((element) => datosAExcluir.push(element.toString()));
    });
    return datosAExcluir;
  }

  useEffect(() => {
    getDates(productReservas);
    getDatePicked(checkInDate, checkOutDate);
  }, []);

  const excludeDateInCalendar = [];
  getDates(productReservas).forEach((element) =>
    excludeDateInCalendar.push(Date.parse(element))
  );

  function getDatePicked(fechaInicio, fechaFin) {
    const desde = fechaInicio;
    const hasta = fechaFin;
    let currentDate = desde;
    let dateArray = [];
    let rangoPickerParce = [];
    let resultado = 0;

    while (currentDate <= hasta) {
      dateArray.push(Date.parse(currentDate));
      currentDate = sumarDias(currentDate, 1);
    }
    dateArray.forEach((element) => rangoPickerParce.push(element));

    excludeDateInCalendar.map((element2) => {
      if (rangoPickerParce.includes(element2)) {
        return (resultado += 1);
      } else {
        return (resultado = resultado + 0);
      }
    });
    return resultado;
  }

  function disabledDates (start,end){
    getDatePicked(start, end)>0? setContainsDisabledDates(true) : setContainsDisabledDates(false)
  }

  function errorPicker() {}
  function onChange(dates) {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
    getDatePicked(start, end);
    errorPicker();
    disabledDates (start,end)
  }

  return (
    <>
      <div className="productsDatePicker">
        <DatePicker
          excludeDates={excludeDateInCalendar}
          minDate={new Date()}
          inline
          monthsShown={2}
          locale="es"
          disabledKeyboardNavigation={true}
          onChange={onChange}
          startDate={checkInDate}
          endDate={checkOutDate}
          selectsRange={optionPicker}
          selectsDisabledDaysInRange={true}
        
        />
        <span
          className={
            getDatePicked(checkInDate, checkOutDate) > 0
              ? "datePicker__error"
              : "none"
          }
        >
          El rango no puede contener fechas reservadas!
        </span>
      </div>
      <div className="productsDatePicker__mobile">
        <DatePicker
          excludeDates={excludeDateInCalendar}
          minDate={new Date()}
          inline
          monthsShown={2}
          locale="es"
          disabledKeyboardNavigation={true}
          onChange={onChange}
          startDate={checkInDate}
          endDate={checkOutDate}
          selectsRange
          selectsDisabledDaysInRange={false}
        />
        <span
          className={
            getDatePicked(checkInDate, checkOutDate) > 0
              ? "datePicker__error"
              : "none"
          }
        >
          El rango no puede contener fechas reservadas!
        </span>
      </div>
    </>
  );
}
export default ProductsDatePicker;
