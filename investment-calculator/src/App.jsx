import React from "react";
import "./App.css";

import Form from "./components/Form";
import Header from "./components/Header";
import Tablelist from "./components/Tablelist";

function App() {
  const calculateHandler = (userInput) => {
    // Должен вызываться при отправке формы

    const yearlyData = []; // результаты таблицы

    let currentSavings = +userInput["current-savings"]; // сколько у вас денег сейчас
    const yearlyContribution = +userInput["yearly-contribution"]; // сколько денег вы готовы откладывать в год
    const expectedReturn = +userInput["expected-return"] / 100; // какой процент вы планируете получать от общей суммы в год
    const duration = +userInput["duration"]; // продолжительность (лет)

    // Ниже приведен код для вычисления годовых результатов (общей суммы накоплений, процентов и т. д.)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(yearlyData);
    // результаты yearlyData надо отобразить в таблице
  };

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} />
      {/* Задача: Показать таблицу ниже условно (только после доступности результатов) */}
      {/* Показать текст-запаску, если данных нет */}
      <Tablelist />
    </div>
  );
}

export default App;
