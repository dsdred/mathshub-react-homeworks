import React, { useState } from "react";

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
    <div>
      <div>{text}</div>
      <button type="button" onClick={clicDecrease}>
        Уменьшить
      </button>
      <button type="button" onClick={clickIncrease}>
        Увеличить
      </button>
    </div>
  );
}

export default Counter;
