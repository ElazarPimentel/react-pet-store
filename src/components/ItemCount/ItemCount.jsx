// filename: src/components/ItemCount/ItemCount.jsx

import { useState } from 'react';

export function ItemCount({ stock, initial, onAdd }) {
     const [count, setCount] = useState(initial);

     const increaseCount = () => {
          if (count < Math.floor(stock)) setCount(count + 1); 
     };

     const decreaseCount = () => {
          if (count > 0) setCount(count - 1);
     };

     return (
          <div className="item-count-container">
               <button className="count-button" onClick={decreaseCount}>-</button>
               <span className="count-display">{count}</span>
               <button className="count-button" onClick={increaseCount}>+</button>
               <button
                    className="add-to-cart-button"
                    onClick={() => onAdd(count)}
                    disabled={count === 0}
               >
                    Agregar al carrito
               </button>
          </div>
     );
}
