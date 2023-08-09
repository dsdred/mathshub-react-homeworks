import React, { useRef } from "react";

function Form({ calculateHandler }) {
  const currentSavingsRef = useRef();
  const yearlyContributionRef = useRef();
  const expectedReturnRef = useRef();
  const durationRef = useRef();

  const onResetHeandler = (event) => {
    event.preventDefault();

    currentSavingsRef.current.value = "";
    yearlyContributionRef.current.value = "";
    expectedReturnRef.current.value = "";
    durationRef.current.value = "";
  };

  const onSubmitHeandler = (event) => {
    event.preventDefault();

    const userInput = {
      "current-savings": currentSavingsRef.current.value,
      "yearly-contribution": yearlyContributionRef.current.value,
      "expected-return": expectedReturnRef.current.value,
      duration: durationRef.current.value,
    };

    calculateHandler(userInput);
  };

  return (
    <form
      className="form"
      onReset={onResetHeandler}
      onSubmit={onSubmitHeandler}
    >
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Ваши текущие накопления ($)</label>
          <input type="number" id="current-savings" ref={currentSavingsRef} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">
            Сколько отложите за год ($)
          </label>
          <input
            type="number"
            id="yearly-contribution"
            ref={yearlyContributionRef}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Ожидаемый Процент (%, в год)</label>
          <input type="number" id="expected-return" ref={expectedReturnRef} />
        </p>
        <p>
          <label htmlFor="duration">
            Продолжительность Инвестирования (лет)
          </label>
          <input type="number" id="duration" ref={durationRef} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Сбросить
        </button>
        <button type="submit" className="button">
          Рассчитать
        </button>
      </p>
    </form>
  );
}

export default Form;
