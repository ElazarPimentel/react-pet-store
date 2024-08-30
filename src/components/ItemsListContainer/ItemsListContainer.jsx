// filename: src/components/ItemsListContainer/ItemsListContainer.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../data/mockAPI';
import { ItemList } from '../ItemList/ItemList';

export function ItemsListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = categoryId ? getProductsByCategory : getProducts;
        fetchProducts(categoryId)
            .then(setProducts)
            .catch(error => console.error('Failed to fetch products:', error));
    }, [categoryId]);

    return (
        <div className="ui-container">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}
