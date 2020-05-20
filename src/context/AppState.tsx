import React, { useReducer, FC } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { InitState, Transaction } from "./types";





export const GlobalProvider: FC = ({ children }) => {
const initialState: InitState = {
  transactions: [
    { id: '1', text: "Flower", amount: -20 },
    { id: '2', text: "Salary", amount: 300 },
    { id: '3', text: "Book", amount: -10 },
    { id: '4', text: "Camera", amount: 150 },
  ],
}

  const [state, dispatch] = useReducer(AppReducer, initialState);


  const { transactions } = state

  const deleteTransaction = (id:string) => {
    dispatch({type: "DELETE_TRANSACTION", payload: id})
  }

  const addTransaction = (transaction: Transaction) => {
    dispatch({type: "ADD_TRANSACTION", payload: transaction})
  }

  const editTransaction = (transaction: Transaction) => {
    dispatch({type: "EDIT_TRANSACTION", payload: transaction})
  }

  return (
    <AppContext.Provider value={{ transactions, deleteTransaction, addTransaction, editTransaction }}>
      {children}
    </AppContext.Provider>
  );
};
