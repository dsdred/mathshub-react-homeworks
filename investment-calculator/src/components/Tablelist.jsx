import React from "react";

function Tablelist({ yearlyData }) {
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
        {yearlyData.map((itemyearlyData) => (
          <tr key={itemyearlyData.year}>
            <td>{itemyearlyData.year}</td>
            <td>{itemyearlyData.savingsEndOfYear.toFixed(2)}</td>
            <td>{itemyearlyData.yearlyInterest.toFixed(2)}</td>
            <td>{itemyearlyData.allYearlyInterest.toFixed(2)}</td>
            <td>{itemyearlyData.chekAll.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tablelist;
