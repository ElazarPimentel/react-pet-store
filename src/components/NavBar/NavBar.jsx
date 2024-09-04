import { NavLink } from "react-router-dom"; 
import { CartWidget } from "../CartWidget/CartWidget";
import styles from './NavBar.module.css';
const logo = "/patapata-logo01.png";

export function NavBar() {
    return (
        <nav className={styles.navContainer}>
            <NavLink to="/" className={styles.navbarLogoLink}>
                <img src={logo} alt="Pata-Pata Logo" className={styles.navbarLogo} />
            </NavLink>
            <div className={styles.navLinks}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} >Inicio</NavLink>
                <NavLink to="/category/Juguetes" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}> Juguetes </NavLink>
                <NavLink to="/category/Medicamentos" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Medicamentos</NavLink>
                <NavLink to="/category/Comida" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Comida</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}
