import React from "react";
import "../../styles/chatBot/chatThemes.css";

const ChatThemes = (props) => {
  const options = [
    { text: "Crear una cuenta", handler: props.actionProvider.handleSignUp, id: 1 },
    { text: "Iniciar sesión", handler: props.actionProvider.handleLogin, id: 2 },
    { text: "Realizar una reserva", handler: props.actionProvider.handleReservation, id: 3 },
    { text: "Ver mis reservas", handler: props.actionProvider.handleProfile, id: 4 },
    { text: "Ver mis favoritos", handler: props.actionProvider.handleFavorites, id: 5 },
    { text: "Ver mis hospedajes", handler: props.actionProvider.handleAdmin, id: 6 },
    { text: "Alquilar mi alojamiento", handler: props.actionProvider.handleNewAdmin, id: 7 },
    { text: "Contactar con un asesor", handler: props.actionProvider.handleContact, id: 8 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="chatThemesButton" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="chatThemesContainer">{optionsMarkup}</div>;
};

export default ChatThemes;
