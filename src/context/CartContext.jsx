// filename: src/context/CartContext.jsx

import { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getCart, createCart, updateCart } from '../services/apiService';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(['cartId']);

  useEffect(() => {
    const initializeCart = async () => {
      if (!cookies.cartId) {
        const newCartId = Date.now().toString();
        const created = await createCart(newCartId);
        if (created.success) {
          setCookie('cartId', newCartId, { path: '/' });
        }
      } else {
        const cartId = String(cookies.cartId);  // Ensure cartId is always a string
        const cartData = await getCart(cartId);
        if (!cartData.fail) {
          setCart(cartData.data || []);
        }
      }
    };
    initializeCart();
  }, [cookies.cartId, setCookie]);

  const addToCart = async (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    const cartId = String(cookies.cartId);  // Ensure cartId is always a string

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      await updateCart(cartId, updatedCart);
    }
  };

  const value = { cart, addToCart, setCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
