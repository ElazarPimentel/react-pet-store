// filename: src/components/Item/Item.jsx

import { Link } from "react-router-dom";
import styles from './Item.module.css';

export function Item({ id, name, description, price, imageUrl }) {
     return (
          <div className={styles.card}>
               <img src={imageUrl} alt={name} />
               <h2>{name}</h2>
               <p>{description}</p>
               <span className={styles.itemPriceDisplay}>Precio: {price}</span>
               <div className={styles.itemFooter}>
                    <Link to={`/item/${id}`} className={styles.button}>Ver detalles</Link>
               </div>
          </div>
     );
}