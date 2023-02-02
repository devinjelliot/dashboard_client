import React, { useState } from 'react';
import { OrderState, initialOrderCreateState } from '../states/OrderState';
import { paymentServiceStub } from '../PaymentServiceStub';

const OrderCreateView: React.FC = () => {
  const [state, setState] = useState<OrderState>(initialOrderCreateState);

  const handleOrderValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      orderCreate: {
        ...state.orderCreate,
        orderValue: parseInt(event.target.value, 10)
      }
    });
  };

  const handleCustomerPhone1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      orderCreate: {
        ...state.orderCreate,
        customerPhone1: parseInt(event.target.value, 10)
      }
    });
  };

  const handleCustomerEmail1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      orderCreate: {
        ...state.orderCreate,
        customerEmail1: event.target.value
      }
    });
  };

  const handleSubmit = async () => {
    try {
      setState({ ...state, loading: true, error: null });
      //await paymentServiceStub.submitOrder(state.order);
      const service = paymentServiceStub();
      await service.submitOrder(state);

      setState({ ...state, loading: false, error: null });

    } catch (error) {
      setState({ ...state, loading: false, error: "error" });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="orderValue">Order Value:</label>
        <input
          type="number"
          id="orderValue"
          value={state.orderCreate.orderValue}
          onChange={handleOrderValueChange}
        />
      </div>
      <div>
        <label htmlFor="customerPhone1">Customer Phone:</label>
        <input
          type="number"
          id="customerPhone1"
          value={state.orderCreate.customerPhone1}
          onChange={handleCustomerPhone1Change}
        />
      </div>
      <div>
        <label htmlFor="customerEmail1">Customer Email:</label>
        <input
          type="email"
          id="customerEmail1"
          value={state.orderCreate.customerEmail1}
          onChange={handleCustomerEmail1Change}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>Error: {state.error}</div>}
    </form>
  );
};

export default OrderCreateView;
