// src/components/CartWidget/CartWidget.jsx

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cartIcon from './assets/cart.svg';  
import styles from './CartWidget.module.css';

export const CartWidget = () => {
    const { cart, error } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={styles.cartWidgetContainer} onClick={handleCartClick}>
            <img src={cartIcon} alt="Ícono de carrito de compras" />  
            <span className={styles.counter}>{itemCount}</span>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
