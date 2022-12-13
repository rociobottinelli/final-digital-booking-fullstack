import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config/config";
import MessageParser from "./config/MessageParser";
import ActionProvider from "./config/ActionProvider";
import monkeyBot from "../../assets/images/monkey-bot.png";
import "../../styles/chatBot/monkeyBotContainer.css";

const ChatBot = () => {
  const [openBot, setOpenBot] = useState(false);

  const handleMonkey = () => {
    setOpenBot((prevState) => !prevState);
  };

  return (
    <div className="monkeyBotContainer">
      {openBot && (
        <>
          <span className="closeButton" onClick={handleMonkey}>
            Cerrar
          </span>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} placeholderText='Escribí tu mensaje'/>
        </>
      )}
      <div className="monkeyBotContainer-div">
        {!openBot && <h4>¿Cómo podemos ayudarte?</h4>}
        <img
          className="monkeyBotContainer-img"
          onClick={handleMonkey}
          src={monkeyBot}
          alt="Monkey bot"
        />
      </div>
    </div>
  );
};

export default ChatBot;
