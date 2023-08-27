import React from "react";
import "./MainFooter.css";

import FooterMenu from "./FooterMenu";

function MainFooter() {
  return (
    <section className="footerContayner">
      <FooterMenu />
      <p className="copyrightStyle">В Контакте © 2006-2008</p>
      <p className="authorStyle">Павел Дуров</p>
    </section>
  );
}

export default MainFooter;
