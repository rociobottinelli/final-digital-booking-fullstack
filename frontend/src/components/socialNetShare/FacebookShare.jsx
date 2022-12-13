import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

const FacebookShare = ({ title, url, quote }) => {
  return (
    <FacebookShareButton title={title} url={url} quote={quote} hashtag='#digitalBooking'>
      <FacebookIcon className="icon" size={36} round />
    </FacebookShareButton>
  );
};

export default FacebookShare;
