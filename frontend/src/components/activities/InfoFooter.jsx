import React from "react";
import "../../styles/activities/infoFooter.css";
import { BsBuilding ,BsCreditCard2BackFill, BsFillGeoAltFill,  BsFillChatTextFill} from "react-icons/bs";

function InfoFooter() {
  return (
    <div className="infoFooter">
      <h2>Con Booking viajar es más facil</h2>
      <div className="infoFooter__container">
        <div>
          <span><BsBuilding/></span>
          <div >
            <h3>Buscá tu Alojamiento</h3>
            <p>Podes buscar por ciudad, fecha y categoria, elegi el que se se adapte a tus necesidades!</p>
          </div>
        </div>
        <div>
          <span><BsCreditCard2BackFill/></span>
          <div>
            <h3>Realizá la reserva</h3>
            <p>Completá tus datos, rango de fechas, horario de Check In y nada más ¡A disfrutar!</p>
          </div>
        </div>
        <div>
          <span><BsFillGeoAltFill/></span>
          <div>
            <h3>Descubrí lugares a visitar</h3>
            <p>Conocé lo mejor del destino: atracciones, ubicación, valoraciones y mucho más</p>
          </div>
        </div>
        <div>
          <span><BsFillChatTextFill/></span>
          <div>
            <h3>Asistencia 24/7</h3>
            <p>El equipo de Atención al Cliente de Booking.com está a tu disposición las 24 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoFooter;
