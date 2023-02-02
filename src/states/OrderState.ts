import { Order, OrderCreateViewModel, TransactionHistoryViewModel } from "../models/OrderModel";

export interface OrderState {
  order: Order;
  orderCreate: OrderCreateViewModel;
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

export function convertToTransactionHistoryViewModel(
  order: Order
): TransactionHistoryViewModel {
  return {
    orderId: order.orderId,
    date: order.date,
    time: order.time,
    orderTotal: {
      subTotal: order.orderTotal.subTotal,
      tip: order.orderTotal.tip,
      fee: order.orderTotal.fee,
      orderTotal: order.orderTotal.orderTotal,
    },
    orderStatus: "success",
  };
}

export const initialOrderCreateState: OrderState = {
  order: {
    orderId: '',
    date: '',
    time: '',
    customerPhone1: 0,
    customerEmail1: '',
    orderValue: 0,
    orderTotal: {
      subTotal: 0,
      tip: 0,
      fee: 0,
    orderTotal: 0,
  },
  orderStatus: "success",
  },
  orderCreate: {
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
    orderStatus: 'success',
  },
  loading: false,
  error: null,
};
