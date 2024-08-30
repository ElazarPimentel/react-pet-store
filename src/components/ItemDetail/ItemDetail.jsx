// filename: src/components/ItemDetail/ItemDetail.jsx

import { ItemCount } from '../ItemCount/ItemCount';

export function ItemDetail({ id, name, description, price, imageUrl, stock }) {
     const handleAdd = (quantity) => {
          console.log(`Added ${quantity} of ${name} to cart.`);
     };

     return (
          <div className="item-detail">
               <img src={imageUrl} alt={name} />
               <h2>{name}</h2>
               <p>{description}</p>
               <span>Price: {price}</span>
               <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          </div>
     );
}
