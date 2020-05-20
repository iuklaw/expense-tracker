import { InitState } from "./types";
import { Reducer } from "react";

type ActionTypes =
  | "DELETE_TRANSACTION"
  | "ADD_TRANSACTION"
  | "EDIT_TRANSACTION";

type ActionType = {
  type: ActionTypes;
  payload?: any;
};

const reducer: Reducer<InitState, ActionType> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction: any) => {
          console.log(payload);
          return transaction.id !== payload;
        }),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case "EDIT_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map(
          (transaction) =>
            (transaction.id === payload.id
              ? (transaction = payload)
              : transaction)
        ),
      };
    default:
      return state;
  }
};

export default reducer;
