import React, { useContext, useEffect, useState } from "react";

import  AppContext  from "../context/AppContext";

const Balance = () => {
  const { transactions } = useContext(AppContext);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(
      transactions.reduce((curr, prev) => {
        return prev.amount + curr;
      }, 0)
    );
  }, [transactions]);

  return (
    <>
      <h4>Balance:</h4>
      <h1 id="balance">{balance}$</h1>
    </>
  );
};

export default Balance;
