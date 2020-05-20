import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import AppContext from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<string>('');

  const { addTransaction } = useContext(AppContext);

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTransaction({
      amount: +amount,
      text,
      id: uuidv4()
    })

    setText('')
    setAmount('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={changeText}
            autoComplete="off"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <p className="amount-desc">(negative - expense, positive - income)</p>
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={changeAmount}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
