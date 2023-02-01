import React, { useState } from 'react';
import { Order, mockOrders } from '../models/OrderModel';


interface Props {
  orders: Order[];
  toggleSalesSummary: () => void;
  showSalesSummary: boolean;
  downloadAsCSV: (orders: Order[]) => void;
  downloadAsPDF: (orders: Order[]) => void;
  cancelOrder: (orderId: string) => void;
}


const TransactionHistoryView: React.FC<Props> = ({
  orders,
  toggleSalesSummary,
  showSalesSummary,
  downloadAsCSV,
  downloadAsPDF,
  cancelOrder,
}) => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(showSalesSummary);

  return (
    <div className="transaction-history">
      <button onClick={() => setIsToggled(!isToggled)}>Toggle Sales Summary</button>
      <button onClick={() => downloadAsCSV(orders)}>Download as CSV</button>
      <button onClick={() => downloadAsPDF(orders)}>Download as PDF</button>
      {!isToggled && (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Order Total</th>
              <th>Order Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.date}</td>
                <td>{order.time}</td>
                <td>{order.orderValue}</td>
                <td>{order.orderStatus}</td>
                <td>
                  <button onClick={() => setExpandedOrderId(order.orderId)}>
                    Expand
                  </button>
                  <button onClick={() => cancelOrder(order.orderId)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {expandedOrderId && (
        <div className="expanded-order">
          <h2>Expanded Order</h2>
          <p>Order ID: {expandedOrderId}</p>
          <p>Subtotal: ...</p>
          <p>Tip: ...</p>
          <p>Fee: ...</p>
          <p>Order Total: ...</p>
        </div>
      )}
      {isToggled && (
        <div className="sales-summary">
          <h2>Sales Summary</h2>
          <p>Gross Value: ...</p>
          <p>Fees: ...</p>
          <p>Tips: ...</p>
          <p>Chargebacks: ...</p>
        </div>
      )}
    </div>
  );
};
