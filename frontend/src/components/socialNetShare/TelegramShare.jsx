import React from "react";
import { TelegramIcon, TelegramShareButton } from "react-share";

const TelegramShare = ({ title, url, quote }) => {
  return (
    <TelegramShareButton title={title} url={url} quote={quote} hashtag="#digitalBooking">
      <TelegramIcon className="icon" size={36} round />
    </TelegramShareButton>
  );
};

export default TelegramShare;
