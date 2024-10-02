// src/components/Cart/CartPresentation.jsx

import styles from './Cart.module.css';

export function CartPresentation({
  cart,
  stockInfo,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  emptyCart,
  checkout,
}) {
  return (
    <div className={styles.cartContainer}>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className={styles.cartItemsContainer}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.imageUrl} alt={item.name} />
              <div className={styles.cartItemDetails}>
                <p>{item.name}</p>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>
                  Stock disponible:{' '}
                  {stockInfo[item.id] === 0 ? '0 - Pronto nuevo stock!' : stockInfo[item.id]}
                </p>
              </div>
              <div className={styles.cartItemControls}>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <button onClick={() => removeFromCart(item)} className={styles.removeButton}>
                  Sacar del carrito
                </button>
                <button
                  onClick={() => increaseQuantity(item)}
                  disabled={item.quantity >= stockInfo[item.id]}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={styles.cartSummary}>
        <button onClick={emptyCart} className={styles.checkoutButton}>
          Vaciar carrito
        </button>
        <button onClick={checkout} className={styles.checkoutButton}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
