export type Transaction = {
  id: string;
  text: string;
  amount: number;
};

export interface InitState {
  transactions: Transaction[];
}

export type InitStateFunctions = {
  deleteTransaction: (id: string) => void;
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (transaction: Transaction) => void;
};
