// filename: src/components/ItemDetailContainer/ItemDetailContainer.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/mockAPI';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(setProduct)
            .catch(console.error);
    }, [itemId]);

    return (
        <div className="ui-container">
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
        </div>
    );
}
