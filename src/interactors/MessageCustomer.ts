import { Order } from "../models/OrderCreateModel";

export class NotifyCustomerInteractor {
  constructor(private order: Order) {}

  public notify() {
    // logic to send a message to the customer
  }
}