// filename: src/components/Item/Item.jsx

import { Link } from "react-router-dom";

export function Item({ id, name, description, price, imageUrl }) {
     return (
          <div className="item">
               <img src={imageUrl} alt={name} />
               <h2>{name}</h2>
               <p>{description}</p>
               <span>{price}</span>
               <Link to={`/item/${id}`} className="btn-primary">Ver detalles</Link>
          </div>
     );
}
