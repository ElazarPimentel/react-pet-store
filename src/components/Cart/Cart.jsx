// filename: src/components/Cart/Cart.jsx

import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { fetchAPI, updateProductStock } from '../../services/apiService';
import styles from './Cart.module.css';

export default function Cart() {
  const { cart, emptyCart, updateQuantity } = useContext(CartContext);
  const [stockInfo, setStockInfo] = useState({});

  useEffect(() => {
    const fetchStock = async () => {
      const stocks = {};
      for (const item of cart) {
        const product = await fetchAPI({ productId: item.id });
        if (product && product.stock !== undefined) {
          stocks[item.id] = product.stock;
        } else {
          stocks[item.id] = 0;
        }
      }
      setStockInfo(stocks);
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

  const checkout = async () => {
    try {
      for (const item of cart) {
        const newStock = stockInfo[item.id] - item.quantity;
        if (newStock < 0) {
          alert(`No hay suficiente stock para ${item.name}. Solo quedan ${stockInfo[item.id]} en existencia.`);
          return;
        }
        await updateProductStock(item.id, newStock);
      }
      await emptyCart();
      alert('Compra realizada con éxito');
    } catch {
      alert('Hubo un error al procesar tu compra');
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.imageUrl} alt={item.name} />
              <div className={styles.cartItemDetails}>
                <p>{item.name}</p>
                <p>Precio: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Stock disponible: {stockInfo[item.id]}</p>
                {stockInfo[item.id] === 0 && <p>Sin stock. Vuelve pronto.</p>}
                {stockInfo[item.id] > 0 && item.quantity >= stockInfo[item.id] && (
                  <p>No puedes agregar más de {stockInfo[item.id]} unidades.</p>
                )}
              </div>
              <div className={styles.cartItemControls}>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <button onClick={() => increaseQuantity(item)} disabled={item.quantity >= stockInfo[item.id]}>
                  +
                </button>
              </div>
            </div>
          ))}
          <div className={styles.cartSummary}>
            <button onClick={emptyCart} className={styles.checkoutButton}>
              Vaciar carrito
            </button>
            <button onClick={checkout} className={styles.checkoutButton}>
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
