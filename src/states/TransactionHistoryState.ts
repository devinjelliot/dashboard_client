
import { TransactionHistoryModel } from "../models/TransactionHistoryModel";

interface TransactionHistoryState {
  transactions: TransactionHistoryModel[];
  selectedTransaction: TransactionHistoryModel | null;
  downloadFormat: "csv" | "pdf" | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: TransactionHistoryState = {
  transactions: [],
  selectedTransaction: null,
  downloadFormat: null,
  isLoading: false,
  error: null,
};

export { type TransactionHistoryState, initialState };
