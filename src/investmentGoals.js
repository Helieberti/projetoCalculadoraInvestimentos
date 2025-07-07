function convertToMonthlyReturnRate(yearlyReturnRate) {
  return yearlyReturnRate ** (1 / 12);
}

 export function genareteReturnArray(
  startingAmount = 0,
  timeHorizon = 0,
  timePeriod = "monthly",
  monthlyContribution = 0,
  returRate = 0,
  returnTimeFrame = "monthly"
) {
  // Verificando se os campos estão preenchidos
  if (!timeHorizon || !startingAmount) {
    throw new Error(
      "Investimento inicial e prazo devem ser preenchidos con valores positivos."
    );
  }

  const finalReturnRate =
    returnTimeFrame === "monthly"
      ? 1 + returRate / 100
      : convertToMonthlyReturnRate(1 + returRate / 100);

  const finalTimeHorizon =
    timePeriod === "monthly" ? timeHorizon : timeHorizon * 12;

  const referenceInvestmentObject = {
    investedAmount: startingAmount,
    interestReturns: 0,
    totalInterestReturns: 0,
    month: 0,
    totalAmount: startingAmount,
  };

  const returnsArray = [referenceInvestmentObject];
  for (
    let timeReference = 1;
    timeReference <= finalTimeHorizon;
    timeReference++
  ) {
    const totalAmount =
      returnsArray[timeReference - 1].totalAmount * finalReturnRate +
      monthlyContribution;

    const interestReturns =
      returnsArray[timeReference - 1].totalAmount * finalReturnRate;

    const investedAmount = startingAmount + monthlyContribution * timeReference;

    const totalInterestReturns = totalAmount - investedAmount;

    returnsArray.push({
      investedAmount,
      interestReturns,
      totalInterestReturns,
      month: timeReference,
      totalAmount,
    });
  }
  return returnsArray;
}
