// filename: src/components/Item/Item.jsx

import { Link } from "react-router-dom";

export function Item({ id, name, description, price, imageUrl }) {
     return (
          <div className="item">
               <img src={imageUrl} alt={name} />
               <h2>{name}</h2>
               <p>{description}</p>
               <div className="item-footer">
                    <span className="item-price-display">{Math.round(price)}</span>
                    <Link to={`/item/${id}`} className="btn-primary">Ver detalles</Link>
               </div>
          </div>
     );
}
