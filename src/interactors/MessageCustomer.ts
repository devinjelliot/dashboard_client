import { Order } from "../models/OrderModel";

export class NotifyCustomerInteractor {
  constructor(private order: Order) {}

  public notify() {
    // logic to send a message to the customer
  }
}