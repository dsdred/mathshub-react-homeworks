import React from "react";

import logoImg from "../../image/vk2009head.png";
import "./MainHeader.css";
import MainHeaderMenu from "./MainHeaderMenu";

function MainHeader() {
  return (
    <header>
      <div className="hederStyle">
        <img className="headerImg" src={logoImg} alt="В контакте" />

        <MainHeaderMenu />
      </div>
    </header>
  );
}

export default MainHeader;
