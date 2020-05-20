import React, { useContext } from "react";

import AppContext from "../context/AppContext";
import { Transaction } from "../context/types";

const IncomeExpenses = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions!.map( (transaction:Transaction) => transaction.amount)
  const income = amounts.filter( amount => amount > 0).reduce( (curr,prev) => {
    return Math.abs(curr+prev)
  }, 0)

  const expense = amounts.filter( amount => amount < 0).reduce( (curr,prev) => {
    return Math.abs(curr-prev)
  }, 0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
