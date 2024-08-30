// src/components/CartWidget/CartWidget.jsx

import cart from './assets/cart.svg';

export const CartWidget = () => {
    return (
        <div className="cart-widget-container">
            <img src={cart} alt="Shopping cart icon" />
            <span className="cart-item-counter">0</span>
        </div>
    )
}
