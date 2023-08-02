import React from "react";
import "./ProfilePicture.css";

function ProfilePicture({ src }) {
  return (
    <div className="img-container">
      <img src={src} alt="avatar" className="img-container-round" />
    </div>
  );
}

export default ProfilePicture;
