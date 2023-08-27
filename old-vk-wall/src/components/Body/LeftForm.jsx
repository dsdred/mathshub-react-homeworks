/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import "./LeftForm.css";

function LeftForm() {
  return (
    <form>
      <div className="inputContayner">
        <label className="labelTextStyle">Email:</label>
        <input type="email" />
        <label className="labelTextStyle">Пароль:</label>
        <input type="password" />
      </div>

      <div className="btnContayner">
        <button type="submit" className="leftFormBtn">
          Вход
        </button>
        <button type="button" className="leftFormBtn">
          Регистрация
        </button>
      </div>
    </form>
  );
}

export default LeftForm;
