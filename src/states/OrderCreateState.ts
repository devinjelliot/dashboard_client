import { Order } from "../models/OrderCreateModel";

export class OrderCreationState {
    constructor(public order?: Order) {}
  }