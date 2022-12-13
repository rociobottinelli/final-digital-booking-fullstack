import React, { useEffect, useState } from "react";
import "../../styles/profile/movements.css";
import "./Movdetails";
import Movdetails from "./Movdetails";
import axios from "axios";
import { baseUrl } from "../../constants/urls";

function Movements() {
  const [reservasList, setReservasList] = useState([]);
  const [puntuaciones, setPuntuaciones] = useState([]);
  const [reservasIDValoradas, setreservasIDValoradas] = useState([]);
  const userId = localStorage.getItem("userId");

  function pushearValuados(obj) {
    const initialState = [];
    obj.forEach((element) => initialState.push(element.reserva.id));
    setreservasIDValoradas(initialState);
  }

  useEffect(() => {
    pushearValuados(puntuaciones);
  }, [puntuaciones]);

  useEffect(() => {
    function getReservasById() {
      axios
        .get(baseUrl + "reservas/usuarios/" + userId)
        .then((response) => {
          setReservasList(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    getReservasById();
  }, [userId]);

  useEffect(() => {
    function getPuntuaciones() {
      axios
        .get(baseUrl + "puntuaciones/usuario/" + userId)
        .then((response) => {
          setPuntuaciones(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    getPuntuaciones();
  }, [userId]);
  
  return (
    <div className="movements">
      <div className="movements__title">
        Reservas <span>realizadas</span>
      </div>
      <div className="movements__title2">A continuación podrás ver el detalle de tus reservas.</div>
      <div className="movements__type">
        <div className="movements__details_id">ID</div>
        <div className="movements__details_name">Alojamiento</div>
        <div className="movements__location">Ubicacion</div>
        <div className="movements__check">Check-in</div>
        <div className="movements__check">Check-out</div>
        <div className="movements__hour">Hora</div>
        <div className="movements__star" id="movements__star__text">
          Calificar
        </div>
      </div>
      {reservasList.length === 0 ? (
        <div className="movements__null">Aún no tenes reservas realizadas.</div>
      ) : (
        reservasList.map((reserva) => (
          <Movdetails
            key={reserva.id}
            id={reserva.id}
            propiedad={reserva.producto.name}
            ubicacion={reserva.producto.ciudad.city}
            pais={reserva.producto.ciudad.pais.pais}
            checkIn={reserva.fechaInicio}
            checkOut={reserva.fechaFin}
            hora={reserva.horaComienzo}
            productoID={reserva.producto.id}
            puntuacionesById={puntuaciones}
            value={reservasIDValoradas.includes(reserva.id) ? true : false}
          />
        ))
      )}
    </div>
  );
}

export default Movements;
