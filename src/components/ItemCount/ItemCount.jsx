// filename: src/components/ItemCount/ItemCount.jsx

import { useState } from 'react';

export function ItemCount({ stock, initial, onAdd }) {
     const [count, setCount] = useState(initial);

     const increaseCount = () => {
          if (count < stock) setCount(count + 1);
     };

     const decreaseCount = () => {
          if (count > 0) setCount(count - 1);
     };

     return (
          <div>
               <button onClick={decreaseCount}>-</button>
               <span>{count}</span>
               <button onClick={increaseCount}>+</button>
               <button onClick={() => onAdd(count)} disabled={count === 0}>Agregar al carrito</button>
          </div>
     );
}
