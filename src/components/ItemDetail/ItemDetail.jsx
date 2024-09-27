// filename: src/components/ItemDetail/ItemDetail.jsx

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './ItemDetail.module.css';

export function ItemDetail({ id, name, description, price, imageUrl, stock }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Adding to cart:", { id, name, price, imageUrl });
    addToCart({ id, name, price, imageUrl });
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.itemImage} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span className={styles.itemPriceDisplay}>Precio: {price}</span>
      <p className={styles.itemStock}>Stock disponible: {Math.floor(stock)}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}
