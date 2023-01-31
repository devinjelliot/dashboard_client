import React from 'react';
import { Order } from '../models/OrderCreateModel';
import { OrderCreationState } from '../states/OrderCreateState';
import { CreateOrderIntent } from '../intents/OrderCreateIntent';

interface Props {
  state: OrderCreationState,
  dispatch: React.Dispatch<CreateOrderIntent>
}

export const PaymentView: React.FC<Props> = ({ state, dispatch }) => {
  const handleCreateOrder = () => {
    const order = new Order(
      'order-id-1',
      100,
      '1234567890',
      'customer@email.com'
    );
    dispatch(new CreateOrderIntent(order));
  };

  return (
    <div>
      <h1>Payment View</h1>
      {state.order ? <p>Order created successfully!</p> : null}
      <button onClick={handleCreateOrder}>Create Order</button>
    </div>
  );
};