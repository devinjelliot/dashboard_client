
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

  // Mock Data Used For Rapid Setup -> DUH
  export const mockOrders: Order[] = [
    {
    orderId: "1",
    date: "04/20/1969",
    time: "4:20pm",
    customerPhone1: 5555555,
    customerEmail1: "rick@piratesofthepancreas.com",
    orderValue: 169,
    orderTotal: {
        subTotal: 140,
        tip: 20,
        fee: 9,
        orderTotal: 169,
        },
    orderStatus: 'pending',
    },
    {
    orderId: "2",
    date: "04/20/1969",
    time: "4:20pm",
    customerPhone1: 5555555,
    customerEmail1: "morty@piratesofthepancreas.com",
    orderValue: 169,
    orderTotal: {
        subTotal: 140,
        tip: 20,
        fee: 9,
        orderTotal: 169,
        },
    orderStatus: 'pending',
    },  
];