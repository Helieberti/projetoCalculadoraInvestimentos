import { genareteReturnArray } from "./src/investmentGoals.js";

const form = document.getElementById("investment-form");

function renderProgression(evt) {
  evt.preventDefault()
  const startingAmount = Number(
    document.getElementById("starting-amount").value
  );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const returnRate = Number(document.getElementById("return-rate").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const evaluationPeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(document.getElementById("tax-rate").value);

  const returnsArray = genareteReturnArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    returnRate,
    evaluationPeriod
  );
  console.log(returnsArray);
}
form.addEventListener("submit", renderProgression);
