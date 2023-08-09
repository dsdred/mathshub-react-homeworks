import React from "react";

function Tablelist({ yearlyData }) {
  console.log(yearlyData);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Год</th>
          <th>Общие накопления</th>
          <th>Накопления с процентов (в год)</th>
          <th>Всего с процентов</th>
          <th>Всего инвестировано</th>
        </tr>
      </thead>
      <tbody>
        {/* {yearlyData.map((itemyearlyData) => (
          <tr>
            <td>{itemyearlyData.year}</td>
            <td>{itemyearlyData.yearlyInterest}</td>
            <td>{itemyearlyData.savingsEndOfYear}</td>
            <td>{itemyearlyData.savingsEndOfYear}</td>
            <td>{itemyearlyData.yearlyContribution}</td>
          </tr>
        ))} */}
        <tr>
          <td>2022</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tablelist;
