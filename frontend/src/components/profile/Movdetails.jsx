import React, { useState } from "react";
import "../../styles/profile/movements.css";
import { imgStar } from "../../styleAux/fontAwesoneIcon";
import { Link } from "react-router-dom";
export default function Mov__details(props) {
  const [id] = useState(props.id);
  const [propiedad] = useState(props.propiedad);
  const [ubicacion] = useState(props.ubicacion);
  const [pais] = useState(props.pais);
  const [checkIn] = useState(props.checkIn);
  const [checkOut] = useState(props.checkOut);
  const [productoID] = useState(props.productoID);
  const [hora] = useState(props.hora);

  return (
    <div className="movements__details" key={id}>
      <div className="movements__details_id">{id}</div>
      <div className="movements__details_name">{propiedad}</div>
      <div className="movements__location">
        <div className="movements__location">{ubicacion},</div>
        <div className="movements__country">{pais}</div>
      </div>
      <div className="movements__check">{checkIn}</div>
      <div className="movements__check">{checkOut}</div>
      <div className="movements__hour">{hora}</div>

      {props.value === true ? (
        <div className="movements__star" id="movements__valorado" key={id}>
          <div>Valorado</div>
        </div>
      ) : (
        <Link
          id="stars__details"
          to={`/perfil/valorar/${productoID}/${id}/${propiedad.replace(
            /[+ ]|%20/g,
            "-"
          )}`}
        >
          <div className="movements__star" id="movements__star_click" key={id}>
            {imgStar}
          </div>
        </Link>
      )}
    </div>
  );
}
