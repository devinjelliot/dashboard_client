
export class TransactionHistoryModel {
    orderId: string;
    date: string;
    time: string;
    orderTotal: {
      subTotal: number;
      tip: number;
      fee: number;
      orderTotal: number;
    };
    orderStatus: {
      status: string;
      statusMessage: string;
    };
  
    constructor(
      orderId: string,
      date: string,
      time: string,
      orderTotal: { subTotal: number; tip: number; fee: number; orderTotal: number },
      orderStatus: { status: string; statusMessage: string }
    ) {
      this.orderId = orderId;
      this.date = date;
      this.time = time;
      this.orderTotal = orderTotal;
      this.orderStatus = orderStatus;
    }
  }
  