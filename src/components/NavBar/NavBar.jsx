// filename: src/components/NavBar/NavBar.jsx

import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
const logo = "/patapata-logo01.png";

export function NavBar() {
    return (
        <nav className="nav-container">
            <Link to="/">
                <img src={logo} alt="Pata-Pata Logo" className="navbar-logo" />
            </Link>
            <div className="nav-links">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/category/Juguetes" className="nav-link">Juguetes</Link>
                <Link to="/category/Medicamentos" className="nav-link">Medicamentos</Link>
                <Link to="/category/Comida" className="nav-link">Comida</Link>
            </div>
            <CartWidget />
        </nav>
    );
}
