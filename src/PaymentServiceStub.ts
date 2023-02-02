import { Order } from "./models/OrderModel";
import { OrderState } from "./states/OrderState";
import { PaymentService } from "./PaymentService";


export class PaymentServiceStub implements PaymentService {
    submitOrder(order: OrderState): Promise<Order> {
      console.log(`Submitting order: ${JSON.stringify(order)}`);
      return Promise.resolve({
        orderId: 'mock-order-id',
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        customerPhone1: 0,
        customerEmail1: '',
        orderValue: 0,
        orderTotal: {
          subTotal: 0,
          tip: 0,
          fee: 0,
          orderTotal: 0,
        },
        orderStatus: 'success',
      });
    }
  }