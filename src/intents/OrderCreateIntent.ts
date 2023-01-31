import { Order } from "../models/OrderCreateModel";

export class CreateOrderIntent {
    public type = 'CreateOrderIntent'
    constructor(public order: Order) {}
  }