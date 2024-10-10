import React from "react";
import { MdMailOutline } from "react-icons/md";

const GmailLink = () => {
  const email = "luisrcal100@gmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <MdMailOutline
        style={{ color: "white", fontSize: "50px", cursor: "pointer" }}
        onClick={handleClick}
      />
    </div>
  );
};

export default GmailLink;
