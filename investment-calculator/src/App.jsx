import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Header from "./components/Header";
import Tablelist from "./components/Tablelist";
import CalculateInvestment from "./utils";

function App() {
  const yearlyData = [];

  const [yearlyDataList, setYearlyDataList] = useState(yearlyData);

  const calculateHandler = (userInput) => {
    setYearlyDataList((prevYearlyData) => CalculateInvestment(userInput));
  };

  return (
    <>
      <Header />
      <Form calculateHandler={calculateHandler} />
      <Tablelist yearlyData={yearlyDataList} />
    </>
  );
}

export default App;
