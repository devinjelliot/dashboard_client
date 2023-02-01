export interface TransactionHistoryViewModel {
    orderId: string; // get this data from integration
    date: string;
    time: string;
    orderTotal: {
      subTotal: number;
      tip: number;
      fee: number;
      orderTotal: number;
    };
    orderStatus: 'pending' | 'confirmedQueue' | 'confirmed N/N' | 'success' | 'error' | 'fail';
  }
  
  export interface Order {
    orderId: string; // get this data from integration
    date: string;
    time: string;
    customerPhone1: number;
    customerEmail1: string;
    orderValue: number;
    orderTotal: {
      subTotal: number;
      tip: number;
      fee: number;
      orderTotal: number;
    };
    orderStatus: 'pending' | 'confirmedQueue' | 'confirmed N/N' | 'success' | 'error' | 'fail';
  }