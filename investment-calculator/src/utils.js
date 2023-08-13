function CalculateInvestment(userInput) {
  const yearlyData = [];

  let currentSavings = +userInput["current-savings"];
  const yearlyContribution = +userInput["yearly-contribution"];
  const expectedReturn = +userInput["expected-return"] / 100;
  const duration = +userInput["duration"];

  let allYearlyInterest = 0;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;

    allYearlyInterest += yearlyInterest;

    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
      allYearlyInterest: allYearlyInterest,
      chekAll: currentSavings - allYearlyInterest,
    });
  }

  return yearlyData;
}

export default CalculateInvestment;
