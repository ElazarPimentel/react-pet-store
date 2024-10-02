// src/components/Cart/Cart.jsx

import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { fetchAPI } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import styles from './Cart.module.css';

export default function Cart() {
  const { cart, emptyCart, updateQuantity, removeItem } = useContext(CartContext);
  const [stockInfo, setStockInfo] = useState({});
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [showRemoveItemModal, setShowRemoveItemModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [stockError, setStockError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const stocks = {};
        for (const item of cart) {
          const product = await fetchAPI({ productId: item.id });
          stocks[item.id] = product?.stock || 0;
        }
        setStockInfo(stocks);
      } catch (error) {
        console.error('Error al obtener el stock:', error);
        setStockError('Hubo un error al obtener la información de stock.');
        setStockInfo({});
      }
    };
    fetchStock();
  }, [cart]);

  const increaseQuantity = (item) => {
    if (item.quantity < stockInfo[item.id]) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemoveFromCart = (item) => {
    setItemToRemove(item);
    setShowRemoveItemModal(true);
  };

  const confirmRemoveItem = () => {
    removeItem(itemToRemove.id);
    setShowRemoveItemModal(false);
    setItemToRemove(null);
  };

  const cancelRemoveItem = () => {
    setShowRemoveItemModal(false);
    setItemToRemove(null);
  };

  const handleEmptyCart = () => {
    setShowEmptyCartModal(true);
  };

  const confirmEmptyCart = () => {
    emptyCart();
    setShowEmptyCartModal(false);
  };

  const cancelEmptyCart = () => {
    setShowEmptyCartModal(false);
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Tu carrito</h2>
      {stockError && <p className={styles.error}>{stockError}</p>}
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className={styles.cartItemsContainer}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.imageUrl} alt={item.name} />
                <div className={styles.cartItemDetails}>
                  <p>{item.name}</p>
                  <p>Precio: ${item.price}</p>
                  <p>Stock disponible: {stockInfo[item.id] === 0 ? '0 - Pronto nuevo stock!' : stockInfo[item.id]}</p>
                </div>
                <div className={styles.cartItemControls}>
                  <button onClick={() => decreaseQuantity(item)} className={styles.controlButton}>
                    -
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className={styles.controlButton}
                    disabled={item.quantity >= stockInfo[item.id]}
                  >
                    +
                  </button>
                  <button onClick={() => handleRemoveFromCart(item)} className={styles.removeButton}>
                    Sacar del Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <button onClick={handleEmptyCart} className={styles.checkoutButton}>
              Vaciar carrito
            </button>
            <button onClick={proceedToCheckout} className={styles.checkoutButton}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
      <Modal
        isOpen={showEmptyCartModal}
        title="Vaciar Carrito"
        message="¿Estás seguro de que deseas vaciar el carrito?"
        onConfirm={confirmEmptyCart}
        onCancel={cancelEmptyCart}
        confirmText="Sí"
        cancelText="No"
      />
      <Modal
        isOpen={showRemoveItemModal}
        title="Eliminar Producto"
        message={`¿Estás seguro de que deseas eliminar ${itemToRemove?.name} del carrito?`}
        onConfirm={confirmRemoveItem}
        onCancel={cancelRemoveItem}
        confirmText="Sí"
        cancelText="No"
      />
    </div>
  );
}
