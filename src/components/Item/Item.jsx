// filename: src/components/Item/Item.jsx

import { Link } from "react-router-dom";

export function Item({ id, name, description, price, imageUrl }) {
     return (
          <div className="card">
               <img src={imageUrl} alt={name} />
               <h2>{name}</h2>
               <p>{description}</p>
               <span className="item-price-display">Precio: {price}</span>
               <div className="item-footer">
                    <Link to={`/item/${id}`} className="button">Ver detalles</Link>
               </div>
          </div>
     );
}
