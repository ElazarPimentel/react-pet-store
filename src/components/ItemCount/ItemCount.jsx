// filename: ./src/components/ItemCount/ItemCount.jsx

import { useState, useEffect } from 'react';
import styles from './ItemCount.module.css';

export function ItemCount({ stock, initial, onAdd, productId }) {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(`itemCount-${productId}`);
    return savedCount ? Number(savedCount) : initial;
  });

  useEffect(() => {
    localStorage.setItem(`itemCount-${productId}`, count);
  }, [count, productId]);

  const increaseCount = () => count < stock && setCount(count + 1);
  const decreaseCount = () => count > 0 && setCount(count - 1);

  return (
    <div className={styles.itemCountContainer}>
      <div className={styles.counterControls}>
        <button className={styles.countButton} onClick={decreaseCount}>-</button>
        <span className={styles.countDisplay}>{count}</span>
        <button className={styles.countButton} onClick={increaseCount}>+</button>
      </div>
      <button
        className={styles.addToCartButton}
        onClick={() => onAdd(count)}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
