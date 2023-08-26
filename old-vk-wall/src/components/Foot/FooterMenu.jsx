import React from "react";

import "./MainFooter.css";

function FooterMenu() {
  return (
    <ul>
      <li className="liFooterMenu">
        <a href="#about" className="textFooterMenu">
          о сайте
        </a>
      </li>
      <li className="liFooterMenu">
        <a href="#support" className="textFooterMenu">
          техподдержка
        </a>
      </li>
      <li className="liFooterMenu">
        <a href="#blog" className="textFooterMenu">
          блог
        </a>
      </li>
      <li className="liFooterMenu">
        <a href="#rules" className="textFooterMenu">
          правила
        </a>
      </li>
      <li className="liFooterMenu">
        <a href="#helps" className="textFooterMenu">
          помощь
        </a>
      </li>
    </ul>
  );
}

export default FooterMenu;
