// filename: src/components/ItemCount/ItemCount.jsx

import { useState, useEffect } from 'react';

export function ItemCount({ stock, initial, onAdd, productId }) {
     const [count, setCount] = useState(initial);

     useEffect(() => {
          const savedCount = localStorage.getItem(`itemCount-${productId}`);
          if (savedCount) {
               setCount(Number(savedCount));
          }
     }, [productId]);

     useEffect(() => {
          localStorage.setItem(`itemCount-${productId}`, count);
     }, [count, productId]);

     const increaseCount = () => {
          if (count < stock) setCount(count + 1);
     };

     const decreaseCount = () => {
          if (count > 0) setCount(count - 1);
     };

     return (
          <div className="item-count-container">
               <div className="counter-controls">
                    <button className="button count-button" onClick={decreaseCount}>-</button>
                    <span className="counter count-display">{count}</span>
                    <button className="button count-button" onClick={increaseCount}>+</button>
               </div>
               <button
                    className="button add-to-cart-button"
                    onClick={() => onAdd(count)}
                    disabled={count === 0}
               >
                    Agregar al carrito
               </button>
          </div>
     );
}
