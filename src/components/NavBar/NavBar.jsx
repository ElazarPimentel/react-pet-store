// filename: src/components/NavBar/NavBar.jsx

import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className="nav-container">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/category/Juguetes" className="nav-link">Juguetes</Link>
            <Link to="/category/Medicamentos" className="nav-link">Medicamentos</Link>
            <Link to="/category/Comida" className="nav-link">Comida</Link>
            <div className="cart-widget">
                <Link to="/cart" className="nav-link">Carrito</Link>
            </div>
        </nav>
    );
}
