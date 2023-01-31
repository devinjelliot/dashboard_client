

export class Order {
    constructor(
      public orderId: string,
      public orderValue: number,
      public customerPhonePrimary: string,
      public customerEmail: string
    ) {}
  }