import Avatar from "@material-ui/core/Avatar";
import React from "react";
import ProfileImage from "../assets/Images/profile4.jpg";

const ImageAvatar = () => {
  return (
    <Avatar
      alt="Remy Sharp"
      src={ProfileImage}
      className="avatar"
      style={{ width: "17vw", height: "17vw" }}
    />
  );
};

export default ImageAvatar;
