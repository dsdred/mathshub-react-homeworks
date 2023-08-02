import React, { useState } from "react";
import "./Counter.css";

function Counter({ counter }) {
  const [text, setText] = useState(counter);

  const clicDecrease = () => {
    const newCounter = text > 0 ? text - 1 : 0;
    setText(newCounter);
  };
  const clickIncrease = () => {
    const newCounter = text + 1;
    setText(newCounter);
  };

  return (
    <div className="counter-container">
      <div className="counter-container_text">{`Счетчик: ${text}`}</div>
      <button
        type="button"
        className="counter-container_button"
        onClick={clicDecrease}
      >
        Уменьшить
      </button>
      <button
        type="button"
        className="counter-container_button"
        onClick={clickIncrease}
      >
        Увеличить
      </button>
    </div>
  );
}

export default Counter;
