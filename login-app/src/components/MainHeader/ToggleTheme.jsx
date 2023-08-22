/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import "./ToggleTheme.css";
import ThemeContext from "../../context/theme-context";

function ToggleTheme() {
  const contextData = useContext(ThemeContext);

  return (
    <div className="container">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          id="slider"
          onChange={contextData.onChangeThemeStyle}
          checked={contextData.liteStyle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleTheme;
