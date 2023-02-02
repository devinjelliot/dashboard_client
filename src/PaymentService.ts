import { Order } from "./models/OrderModel";
import { OrderState } from "./states/OrderState";

export interface PaymentService {
    submitOrder(order: OrderState): Promise<Order>;
  }
  