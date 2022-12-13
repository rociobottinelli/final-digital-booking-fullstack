import React from "react";
import {Link} from "react-router-dom";
import "../../styles/chatBot/reservationProcess.css";

const ReservationProcess = () => {
  return (
    <>
      <ol className="reservationProcessOl">
        <li className="reservationProcessLi">Ir al Home</li>
        <li className="reservationProcessLi">Buscar un hospedaje por lugar, categoría y/o fecha</li>
        <li className="reservationProcessLi">Entrar al hospedaje que te guste</li>
        <li className="reservationProcessLi">Desplazarse hacia abajo y apretar en "Iniciar reserva"</li>
        <li className="reservationProcessLi">Establecer los datos de la persona para la cual es la reserva</li>
        <li className="reservationProcessLi">Completar checkin, checkout y horario aprox. de llegada</li>
        <li className="reservationProcessLi">Apretar en el botón "Confirmar reserva"</li>
      </ol>
      <Link className="link-list-item-url" to="/">Buscar hospedajes en el Home</Link>
      <p className="botMenu-p">Para ver nuevamente las opciones, ingresá la palabra 'opciones'</p>
    </>
  );
};

export default ReservationProcess;
