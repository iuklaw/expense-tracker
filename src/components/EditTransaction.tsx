import React, { useState, FC, ChangeEvent } from "react";
import { Transaction } from "../context/types";


type IProps = {
  transaction: Transaction;
  onSubmitEdit: (transaction: Transaction) => void;
};

const EditTransaction: FC<IProps> = ({ transaction, onSubmitEdit }) => {
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState((transaction.amount).toString());

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitEdit({ amount: +amount, id: transaction.id, text });
      }}
    >
      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={changeText}
      />
      <input
        type="number"
        placeholder="Enter number..."
        value={amount}
        onChange={changeAmount}
      />
      <button className="btn">Save</button>
    </form>
  );
};

export default EditTransaction;
