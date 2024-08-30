// filename: src/components/NotFound/NotFound.jsx

import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="ui-container not-found-container">
            <h1>¡Ups!</h1>
            <p>Esa página no existe, por favor hacé click <Link to="/">acá</Link> para volver a la página principal.</p>
        </div>
    );
}
