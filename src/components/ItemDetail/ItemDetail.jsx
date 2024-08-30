// filename: src/components/ItemDetail/ItemDetail.jsx

import { ItemCount } from '../ItemCount/ItemCount';

export function ItemDetail({ id, name, description, price, imageUrl, stock }) {
     const handleAdd = (quantity) => {
          console.log(`Added ${quantity} of ${name} to cart.`);
     };

     return (
          <div className="card">
               <div className="card">
                    <img src={imageUrl} alt={name} className="item-image" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <span className="item-price-display">Precio: {price}</span>
                    <p className="item-stock">Stock disponible: {Math.floor(stock)}</p>
                    <ItemCount stock={Math.floor(stock)} initial={1} onAdd={handleAdd} />
               </div>
          </div>
     );
}
