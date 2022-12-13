import React from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

const WhatsappShare = ({ title, url }) => {
  return (
    <WhatsappShareButton title={title} url={url} hashtag="#digitalBooking">
      <WhatsappIcon className="icon" size={36} round />
    </WhatsappShareButton>
  );
};

export default WhatsappShare;
