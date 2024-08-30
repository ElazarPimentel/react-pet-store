// filename: src/data/mockAPI.js

const products = [
    {
        id: '1',
        category: 'Juguetes',
        name: 'Pelota para perros',
        description: 'Una pelota resistente para perros, ideal para juegos al aire libre.',
        price: '10.00',
        imageUrl: '/product-images/dog-toyA001.webp',
        stock: 20,
    },
    {
        id: '2',
        category: 'Medicamentos',
        name: 'Antipulgas para gatos',
        description: 'Solución efectiva contra pulgas y garrapatas para gatos de todas las edades.',
        price: '15.00',
        imageUrl: '/product-images/cat-fleesA001.webp',
        stock: 15,
    },
    {
        id: '3',
        category: 'Comida',
        name: 'Alimento premium para perros',
        description: 'Comida balanceada para perros adultos de todas las razas.',
        price: '20.00',
        imageUrl: '/product-images/dog-foodA001.webp',
        stock: 30,
    },
];

export function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export function getProductsByCategory(category) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category));
        }, 500);
    });
}

export function getProductById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id));
        }, 500);
    });
}
