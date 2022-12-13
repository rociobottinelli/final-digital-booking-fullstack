import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

const TwitterShare = ({ title, url }) => {
  return (
    <TwitterShareButton title={title} url={url} hashtag="#digitalBooking">
      <TwitterIcon className="icon" size={36} round />
    </TwitterShareButton>
  );
};

export default TwitterShare;
