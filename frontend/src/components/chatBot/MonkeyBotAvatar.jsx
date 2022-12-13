import React from 'react';
import monkeyBot from "../../assets/images/monkey-bot.png";
import "../../styles/chatBot/monkeyBotAvatar.css";

const MonkeyBotAvatar = () => {
  return (
    <img className="monkeyBotAvatar" src={monkeyBot} alt="Monkey bot" />
  )
}

export default MonkeyBotAvatar