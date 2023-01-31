import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionHistoryState, initialState } from "../states/TransactionHistoryState";
import { TransactionHistoryModel } from "../models/TransactionHistoryModel";

const transactionHistorySlice = createSlice({
  name: "transactionHistory",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<TransactionHistoryModel[]>) => {
      state.transactions = action.payload;
    },
    setSelectedTransaction: (state, action: PayloadAction<TransactionHistoryModel | null>) => {
      state.selectedTransaction = action.payload;
    },
    setDownloadFormat: (state, action: PayloadAction<"csv" | "pdf" | null>) => {
      state.downloadFormat = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setTransactions, setSelectedTransaction, setDownloadFormat, setIsLoading, setError } = transactionHistorySlice.actions;
export default transactionHistorySlice.reducer;