// filename: src/components/OrderForm/OrderForm.jsx

import { useState } from 'react';
import { collection, addDoc, doc, writeBatch, increment } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useCartContext } from '../../context/CartContext';
import { OrderSummary } from './OrderSummary';
import { FormField } from './FormField';
import styles from './OrderForm.module.css';

export default function OrderForm() {
  const { cart, clearCart } = useCartContext();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido.';
    }
    if (!/^\d{8,}$/.test(formData.phone)) {
      errors.phone = 'El teléfono debe tener al menos 8 dígitos numéricos.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido.';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const ordersCollection = collection(db, 'orders');
      const order = { buyer: formData, items: cart, date: new Date() };
      const orderDoc = await addDoc(ordersCollection, order);
      setOrderId(orderDoc.id);

      const batch = writeBatch(db);
      cart.forEach(item => {
        const productRef = doc(db, 'products', item.id);
        batch.update(productRef, { stock: increment(-item.quantity) });
      });
      await batch.commit();
      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (orderPlaced) {
    return (
      <div className={styles.thankYouMessage}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className={styles.orderFormContainer}>
      <h2>Revisar y confirmar tu pedido</h2>
      <OrderSummary cart={cart} />

      <form onSubmit={handlePlaceOrder} className={styles.formGroup}>
        <FormField
          label="Nombre"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormField
          label="Teléfono"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <FormField
          label="Correo electrónico"
          type="email"
          name="email"
          onChange={handleChange}
          error={errors.email}
        />
        <button type="submit" className={styles.placeOrderButton} disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  );
}
