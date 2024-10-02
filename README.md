
# Pata-Pata Gonia E-commerce Application

Pata-Pata Gonia es una aplicación de e-commerce desarrollada con ReactJS y Vite, diseñada para ofrecer una experiencia de compra fluida y eficiente. La aplicación incorpora componentes reutilizables, enrutamiento avanzado, manejo de estado global mediante Context API, estrategias de reintento con *exponential backoff*, y estilizado modular con CSS Modules. Además, utiliza Firebase Firestore para la gestión de datos en tiempo real.

## Funcionalidades

- **Navbar Dinámico:** Navegación intuitiva a través de diferentes categorías de productos como Juguetes, Medicamentos y Comida.
- **Carrito de Compras:** Widget de carrito con contador dinámico que refleja la cantidad de artículos seleccionados.
- **Listado de Productos:** Visualización de productos con detalles como nombre, descripción, precio y stock disponible.
- **Detalle de Producto:** Página dedicada para cada producto con opción para agregar al carrito.
- **Manejo de Stock:** Indicaciones en tiempo real sobre la disponibilidad de productos, con actualizaciones automáticas.
- **Formulario de Pedido:** Recopilación de datos del comprador con validaciones robustas y confirmación de pedido.
- **Manejo de Errores:** Implementación de *exponential backoff* para reintentos en llamadas a la API y mensajes de error amigables.
- **Modal de Confirmación:** Confirmaciones visuales para acciones críticas como vaciar el carrito o confirmar pedidos.
- **Estilizado Modular:** Uso de CSS Modules para estilos encapsulados y mantenibles.

## Tecnologías Utilizadas

- ReactJS
- React Router DOM
- Vite
- Firebase Firestore
- CSS Modules
- React Cookie
- ESLint

## Instalación

1. Clonar el repositorio: 
   `git clone https://github.com/ElazarPimentel/reactjs-ecommerce.git`
   `cd reactjs-ecommerce`

2. Instalar las dependencias: `npm install`

3. Configurar Firebase: Reemplazar la configuración en `src/services/firebase.js` con las credenciales del proyecto.

4. Iniciar el servidor de desarrollo: `npm run dev`

   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

## Estructura del Proyecto

La estructura de carpetas está organizada para mantener la escalabilidad y la legibilidad:

```
src/
├── components/
├── context/
├── router/
├── services/
├── utils/
├── assets/
├── App.jsx
└── main.jsx
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.