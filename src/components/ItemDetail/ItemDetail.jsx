// src/components/ItemDetail/ItemDetail.jsx

import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import styles from './ItemDetail.module.css';

export function ItemDetail({ id, name, description, price, imageUrl, stock }) {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addError, setAddError] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = async (quantity) => {
    try {
      await addToCart({ id, name, price, imageUrl, quantity });
      setAddedToCart(true);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      setAddError('Hubo un error al agregar el producto al carrito.');
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={name}
          className={`${styles.itemImage} ${stock === 0 ? styles.outOfStockImage : ''}`}
        />
        {stock === 0 && <span className={styles.outOfStockBadge}>Agotado</span>}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <span className={styles.itemPriceDisplay}>Precio: ${price}</span>
      <p className={styles.itemStock}>
        {stock > 0 ? `Stock disponible: ${stock}` : 'Pronto en stock!'}
      </p>
      {stock > 0 && !addedToCart && (
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} productId={id} />
      )}
      {addError && <p className={styles.error}>{addError}</p>}
      {addedToCart && (
        <>
          <p>Producto agregado al carrito.</p>
          <button onClick={goToCart} className={styles.goToCartButton}>
            Ir al carrito
          </button>
        </>
      )}
    </div>
  );
}
