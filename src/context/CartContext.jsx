// src/context/CartContext.jsx

import { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getCart, createCart, updateCart } from '../services/apiService';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(['cartId']);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeCart = async () => {
      try {
        if (!cookies.cartId) {
          const newCartId = Date.now().toString();
          const created = await createCart(newCartId);
          
          if (created.success) {
            setCookie('cartId', newCartId, { path: '/' });
            setCart([]);
          } else {
            setError('No se pudo crear el carrito.');
          }
        } else {
          const cartId = String(cookies.cartId);
          const cartData = await getCart(cartId);

          if (!cartData.fail) {
            setCart(cartData.data || []);
          } else {
            setError('No se pudo obtener el carrito.');
          }
        }
      } catch (err) {
        setError('Error al inicializar el carrito.');
      }
    };

    initializeCart();
  }, [cookies.cartId, setCookie]);

  const addToCart = async (product) => {
    try {
      const existingItem = cart.find(item => item.id === product.id);
      const cartId = String(cookies.cartId);

      if (existingItem) {
        const updatedCart = cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
        setCart(updatedCart);
        await updateCart(cartId, updatedCart);
      } else {
        const updatedCart = [...cart, { ...product }];
        setCart(updatedCart);
        await updateCart(cartId, updatedCart);
      }
    } catch (err) {
      setError('Error al agregar el producto al carrito.');
    }
  };

  const emptyCart = async () => {
    try {
      const cartId = String(cookies.cartId);
      setCart([]);
      await updateCart(cartId, []);
    } catch (err) {
      setError('Error al vaciar el carrito.');
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    try {
      const cartId = String(cookies.cartId);
      const updatedCart = cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      await updateCart(cartId, updatedCart);
    } catch (err) {
      setError('Error al actualizar la cantidad.');
    }
  };

  const removeItem = async (productId) => {
    try {
      const cartId = String(cookies.cartId);
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
      await updateCart(cartId, updatedCart);
    } catch (err) {
      setError('Error al eliminar el producto del carrito.');
    }
  };

  const value = { cart, addToCart, emptyCart, updateQuantity, removeItem, error };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
