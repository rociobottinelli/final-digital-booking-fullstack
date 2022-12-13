import React from "react";
import TelegramShare from "./TelegramShare";
import TwitterShare from "./TwitterShare";
import WhatsappShare from "./WhatsappShare";
import FacebookShare from "./FacebookShare";
import MessengerShare from "./MessengerShare";
import "../../styles/socialNetShare/socialNetShare.css";

const SocialNetShare = ({ title, url }) => {
  return (
    <>
      <FacebookShare title={title} url={url} quote={""} />
      <MessengerShare title={title} url={url} quote={""} />
      <TwitterShare title={title} url={url} />
      <WhatsappShare title={title} url={url} />
      <TelegramShare title={title} url={url} />
    </>
  );
};

export default SocialNetShare;
