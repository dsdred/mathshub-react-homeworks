import React from "react";
import "./MainHeaderMenu.css";

function MainHeaderMenu() {
  return (
    <ul>
      <li>
        <a href="#Login" className="textMenu">
          вход
        </a>
      </li>
      <li>
        <a href="#registration" className="textMenu">
          регистрация
        </a>
      </li>
      <li>
        <a href="#helps" className="textMenu">
          помощь
        </a>
      </li>
    </ul>
  );
}

export default MainHeaderMenu;
