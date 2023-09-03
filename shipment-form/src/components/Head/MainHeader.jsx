import React from "react";

import logoImg from "/image.png";
import "./MainHeader.css";

function MainHeader() {
  return (
    <header className="hederStyle">
      <img className="headerImg" src={logoImg} alt="Почта России" />
    </header>
  );
}

export default MainHeader;
