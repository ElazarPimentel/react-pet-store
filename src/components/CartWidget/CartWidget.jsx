// filename: src/components/CartWidget/CartWidget.jsx

import { useState } from 'react';
import cart from './assets/cart.svg';

export const CartWidget = () => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className="cart-widget-container">
            <img src={cart} alt="Shopping cart icon" />
            <span className="cart-item-counter">{itemCount}</span>
        </div>
    );
}
