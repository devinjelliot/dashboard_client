
import { TransactionHistoryState, initialTransactionHistoryState } from '../states/TransactionHistoryState';
import { Order } from '../models/OrderModel';

export type TransactionHistoryIntent =
  | { type: 'TOGGLE_ORDERS_VIEW' }
  | { type: 'SET_FILTER_DATES', startDate: Date, endDate: Date }
  | { type: 'FETCH_ORDERS_SUCCESS', orders: Order[] };

export function transactionHistoryReducer(state: TransactionHistoryState = initialTransactionHistoryState, action: TransactionHistoryIntent): TransactionHistoryState {
  switch (action.type) {
    case 'TOGGLE_ORDERS_VIEW':
      return { ...state, isOrdersListView: !state.isOrdersListView };
    case 'SET_FILTER_DATES':
      return { ...state, filterStartDate: action.startDate, filterEndDate: action.endDate };
    case 'FETCH_ORDERS_SUCCESS':
      return { ...state, orders: action.orders };
    default:
      return state;
  }
}
