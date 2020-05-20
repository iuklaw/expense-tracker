import React, { FC, useState, useContext } from "react";
import { Transaction } from "../context/types";
import EditTransaction from "./EditTransaction";
import AppContext from "../context/AppContext";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";

interface IProps {
  transaction: Transaction;
  deleteItem: (id: string) => void;
}

const TransactionItem: FC<IProps> = ({ transaction, deleteItem }) => {
  const sign = transaction.amount > 0 ? "+" : transaction.amount < 0 ? "-" : "";
  const { id, amount, text } = transaction;

  const [showEdit, setShowEdit] = useState(false);

  const { editTransaction } = useContext(AppContext);

  const onSubmitEdit = ({ id, amount, text }: Transaction) => {
    setShowEdit(false);
    editTransaction({ id, amount, text });
  };

  return (
    <>
      <li className={amount > 0 ? "plus" : "minus"}>
        {text}
        <span>
          {sign}
          {Math.abs(amount)}$
        </span>
        {!showEdit && (
          <button className="delete-btn" onClick={() => deleteItem(id)}>
            <RiDeleteBin2Line />
          </button>
        )}
        <button className="edit-btn" onClick={() => setShowEdit(!showEdit)}>
        <RiEdit2Line />
        </button>
      </li>
      {showEdit && (
        <div className={`edit-form${showEdit ? '-active' : ''}`}>
        <EditTransaction
          transaction={transaction}
          onSubmitEdit={onSubmitEdit}
        />
        </div>
      )}
    </>
  );
};

export default TransactionItem;
