import { Order } from "../models/OrderModel";

export class CreateOrderIntent {
    public type = 'CreateOrderIntent'
    constructor(public order: Order) {}
  }