// src/data/mockAPI.js


export function getProducts({ categoryId = null, productId = null } = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (productId) {
                resolve(products.find(product => product.id === productId));
            } else if (categoryId) {
                resolve(products.filter(product => product.category === categoryId));
            } else {
                resolve(products);
            }
        }, 500);
    });
}

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
        category: 'Juguetes',
        name: 'Ratón de juguete para gatos',
        description: 'Un ratón de juguete suave y realista que mantendrá entretenido a tu gato.',
        price: '8.00',
        imageUrl: '/product-images/cat-toyA002.webp',
        stock: 25,
    },
    {
        id: '3',
        category: 'Juguetes',
        name: 'Cuerda de juego para perros',
        description: 'Cuerda resistente para juegos de tirar y morder, perfecta para perros de todas las edades.',
        price: '12.00',
        imageUrl: '/product-images/dog-toyA003.webp',
        stock: 30,
    },
    {
        id: '4',
        category: 'Medicamentos',
        name: 'Antipulgas para gatos',
        description: 'Solución efectiva contra pulgas y garrapatas para gatos de todas las edades.',
        price: '15.00',
        imageUrl: '/product-images/cat-fleesA001.webp',
        stock: 15,
    },
    {
        id: '5',
        category: 'Medicamentos',
        name: 'Vitaminas para perros',
        description: 'Suplemento vitamínico para mejorar la salud y vitalidad de los perros.',
        price: '18.00',
        imageUrl: '/product-images/dog-vitaminA002.webp',
        stock: 10,
    },
    {
        id: '6',
        category: 'Medicamentos',
        name: 'Desparasitante para gatos',
        description: 'Tabletas fáciles de administrar para eliminar parásitos internos en gatos.',
        price: '20.00',
        imageUrl: '/product-images/cat-dewormerA003.webp',
        stock: 20,
    },
    {
        id: '7',
        category: 'Comida',
        name: 'Alimento premium para perros',
        description: 'Comida balanceada para perros adultos de todas las razas.',
        price: '20.00',
        imageUrl: '/product-images/dog-foodA001.webp',
        stock: 30,
    },
    {
        id: '8',
        category: 'Comida',
        name: 'Alimento para gatos con salmón',
        description: 'Alimento rico en proteínas y omega-3 para gatos, con sabor a salmón.',
        price: '22.00',
        imageUrl: '/product-images/cat-foodA002.webp',
        stock: 25,
    },
    {
        id: '9',
        category: 'Comida',
        name: 'Galletas saludables para perros',
        description: 'Galletas horneadas con ingredientes naturales, ideales como premio o snack.',
        price: '9.00',
        imageUrl: '/product-images/dog-snackA003.webp',
        stock: 40,
    },
];

