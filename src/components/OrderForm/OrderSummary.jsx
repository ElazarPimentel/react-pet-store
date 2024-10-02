// src/components/OrderForm/OrderSummary.jsx

import styles from './OrderSummary.module.css';

export function OrderSummary({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <div className={styles.orderSummary}>
      <h3>Resumen del Pedido</h3>
      <ul className={styles.orderList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.orderItem}>
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total: ${total.toFixed(2)}</p>
    </div>
  );
}
