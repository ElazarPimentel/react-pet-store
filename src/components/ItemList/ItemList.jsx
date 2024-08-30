// filename: src/components/ItemList/ItemList.jsx

import { Item } from '../Item/Item';

export function ItemList({ products }) {
    return (
        <div className="item-list">
            {products.map(product => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
}
