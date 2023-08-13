import React, { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";
import "./Form.css";

function Form({ calculateHandler }) {
  const [error, setError] = useState(null);

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

    if (
      currentSavingsRef.current.value.length === 0 ||
      +currentSavingsRef.current.value < 0
    ) {
      setError({
        title: "Ошибка",
        message: "Внесите текущие накопления",
      });
      return;
    }
    if (
      yearlyContributionRef.current.value.length === 0 ||
      +yearlyContributionRef.current.value < 0
    ) {
      setError({
        title: "Ошибка",
        message: "Внесите сколько отложено за год",
      });
      return;
    }
    if (
      expectedReturnRef.current.value.length === 0 ||
      +expectedReturnRef.current.value < 0
    ) {
      setError({
        title: "Ошибка",
        message: "Внесите ожидаемый процент",
      });
      return;
    }

    if (
      durationRef.current.value.length === 0 ||
      +durationRef.current.value < 1
    ) {
      setError({
        title: "Ошибка",
        message: "Внесите продолжительность инвестирования",
      });
      return;
    }

    const userInput = {
      "current-savings": currentSavingsRef.current.value,
      "yearly-contribution": yearlyContributionRef.current.value,
      "expected-return": expectedReturnRef.current.value,
      duration: durationRef.current.value,
    };

    calculateHandler(userInput);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
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
            <label htmlFor="expected-return">
              Ожидаемый Процент (%, в год)
            </label>
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
    </div>
  );
}

export default Form;
