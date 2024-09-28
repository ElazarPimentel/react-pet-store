// filename: src/components/OrderForm/OrderSummary.jsx

import styles from './OrderForm.module.css';

export function OrderSummary({ cart }) {
  return (
    <ul className={styles.orderList}>
      {cart.map((item) => (
        <li key={item.id} className={styles.orderItem}>
          <span>{item.name}</span>
          <span>Cantidad: {item.quantity}</span>
          <span>Precio: ${(item.price * item.quantity).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
}
