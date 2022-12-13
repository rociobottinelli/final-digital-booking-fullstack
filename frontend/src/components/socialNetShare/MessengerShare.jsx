import React from "react";
import { FacebookMessengerIcon, FacebookMessengerShareButton } from "react-share";

const MessengerShare = ({ title, url, quote }) => {
  return (
    <FacebookMessengerShareButton title={title} url={url} quote={quote} appId={"3330164263973597"} hashtag="#digitalBooking">
      <FacebookMessengerIcon className="icon" size={36} round />
    </FacebookMessengerShareButton>
  );
};

export default MessengerShare;
