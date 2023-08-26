import React from "react";
import "./MainHeaderMenu.css";

function MainHeaderMenu() {
  return (
    <ul className="ulHeaderMenu">
      <li className="liHeaderMenu">
        <a href="#Login" className="textMenu">
          вход
        </a>
      </li>
      <li className="liHeaderMenu">
        <a href="#registration" className="textMenu">
          регистрация
        </a>
      </li>
      <li className="liHeaderMenu">
        <a href="#helps" className="textMenu">
          помощь
        </a>
      </li>
    </ul>
  );
}

export default MainHeaderMenu;
