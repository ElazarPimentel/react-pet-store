// filename: src/components/NotFound/NotFound.jsx

import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="ui-container not-found-container">
            <h1>Ups!</h1>
            <p>Esa página no existe, por favor hacé click en el botón para volver a la página principal.</p>
            <Link to="/" className="btn-primary">Volver a la página principal</Link>
        </div>
    );
}
