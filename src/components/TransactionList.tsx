import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import TransactionItem from "./TransactionItem";
import { Transaction } from "../context/types";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(AppContext);

  useEffect(() => {}, [transactions]);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <TransitionGroup className="transaction-list">
          {transactions &&
            transactions.map((transaction: Transaction, idx: number) => (
              <CSSTransition key={idx} timeout={300} classNames="item">
                <TransactionItem
                  transaction={transaction}
                  deleteItem={deleteTransaction}
                  key={idx}
                />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>
    </>
  );
};

export default TransactionList;
