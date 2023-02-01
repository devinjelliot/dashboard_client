import { Order } from './OrderModel';

export interface TransactionHistoryState {
  orders: Order[];
  isOrdersListView: boolean;
  filterStartDate: Date | null;
  filterEndDate: Date | null;
}

export const initialTransactionHistoryState: TransactionHistoryState = {
  orders: [],
  isOrdersListView: true,
  filterStartDate: null,
  filterEndDate: null
};

  