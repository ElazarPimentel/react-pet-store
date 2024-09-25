// src/components/Cart/Cart.jsx

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const updateStock = async () => {
    for (const item of cart) {
      const productRef = doc(db, 'products', item.id.toString());
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        const newStock = productSnap.data().stock - item.quantity;
        await updateDoc(productRef, { stock: newStock });
      }
    }
  };

  const checkout = async () => {
    try {
      await updateStock();
      setCart([]);
      await updateDoc(doc(db, 'carts', cookies.cartId), { items: [] });
      alert('Compra realizada con éxito');
    } catch (error) {
      alert('Hubo un error al procesar tu compra');
    }
  };

  return (
    <div>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
              <p>Precio: {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <button onClick={() => removeItem(item)}>Eliminar</button>
            </div>
          ))}
          <button onClick={emptyCart}>Vaciar carrito</button>
          <button onClick={checkout}>Finalizar compra</button>
        </div>
      )}
    </div>
  );
};
