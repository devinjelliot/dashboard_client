import { Order } from "../models/OrderModel";
import { OrderCreateViewModel } from '../models/OrderCreateViewModel';
import { TransactionHistoryViewModel } from "../models/TransactionHistoryViewModel";


export interface OrderState {
  order: OrderCreateViewModel;
  transactionHistory: TransactionHistoryViewModel;
  loading: boolean;
  error: string | null;
}


export function convertToOrderViewModel(order: Order): OrderCreateViewModel {
  return {
    orderValue: order.orderValue,
    customerPhone1: order.customerPhone1,
    customerEmail1: order.customerEmail1,
  };
}


export function convertToTransactionHistoryViewModel(order: Order): TransactionHistoryViewModel {
  return {
    orderId: order.orderId, // get this data from integration
    date: order.date,
    time: order.time,
    orderTotal: {
        subTotal: order.orderTotal.subTotal,
        tip: order.orderTotal.tip,
        fee: order.orderTotal.fee,
        orderTotal: order.orderTotal.orderTotal,
    },
    orderStatus: order.orderStatus,
    };
  }

export const initialOrderCreateState: OrderState = {
    order: {
      orderValue: 0,
      customerPhone1: 0,
      customerEmail1: '',
    },

    transactionHistory: {
      orderId: '',
      date: '',
      time: '',
      orderTotal: {
        subTotal: 0,
        tip: 0,
        fee: 0,
        orderTotal: 0,
      },
      orderStatus: 'success'
    },

    loading: false,
    error: null
  };
