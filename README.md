# Aplicación de E-commerce con ReactJS 

*Alumno:* Alessio Aguirre Pimentel  
*Curso:* ReactJS - CoderHouse  
*Comisión:* 65095

Este proyecto se trata de una aplicación de e-commerce. El proyecto demuestra el uso de componentes de React, enrutamiento y manejo de estado, exponential backoff, todo estilizado con CSS Modules y utilizando Vite para un desarrollo rápido.

## Descripción
Esta aplicación de e-commerce es una landing page sencilla diseñada para ser escalable y seguir las mejores prácticas de React. Incluye un navbar, un widget de carrito de compras y componentes para mostrar productos. El objetivo del proyecto es implementar conceptos clave de React, como la reutilización de componentes, manejo de estado, exponential back off y la obtención de datos asíncronos.

## Funcionalidades
- *Componente Navbar*: Proporciona enlaces de navegación a distintas categorías de productos (e.g., juguetes, comida, medicamentos).
- *Componente CartWidget*: Muestra un ícono de carrito de compras con un contador dinámico para la cantidad de artículos en el carrito.
- *Componente ItemsListContainer*: Muestra un saludo personalizable y obtiene los datos de productos de manera dinámica según la categoría.
- *Componentes ItemDetail e ItemCount*: Muestran información detallada de los productos y permiten al usuario seleccionar cantidades antes de añadir los productos al carrito.
- *Manejo de Errores*: Implementa lógica robusta de manejo de errores con reintentos para solicitudes a la API y mensajes amigables al usuario en caso de fallas. (Exponential backoff)

## Tecnologías Utilizadas
- *React*: Para crear la interfaz de usuario basada en componentes.
- *React Router*: Para el enrutamiento del lado del cliente.
- *Vite*: Como herramienta de desarrollo para compilaciones rápidas y reemplazo de módulos en caliente.
- *CSS Modules*: Para estilizado modular y con alcance específico.
- *Mock API*: Simulación de una API para obtener productos y emular interacciones del mundo real.

## Demo en Vivo
Podés ver la versión en vivo de este proyecto en Vercel:  
[Demo en Vivo en Vercel](https://primer-entrega-reactjs-lvrbinxcd-elazar-pimentels-projects.vercel.app/)

## Instalación
Para instalar y ejecutar este proyecto localmente, seguí estos pasos:

1. Cloná el repositorio:
   git clone https://github.com/ElazarPimentel/reactjs-ecommerce.git
   cd reactjs-ecommerce
  

2. Instalá las dependencias:
   npm install

3. Iniciá el servidor de desarrollo:
   npm run dev

   La aplicación estará disponible en `http://localhost:5173/` predeterminado, puede estar en otro puerto.

## Estructura del Proyecto
La estructura de carpetas está organizada para mantener la escalabilidad y la legibilidad:
src/
├── components/           # Contiene los componentes reutilizables de React
├── data/                 # Datos simulados que emulan las respuestas de una API
├── services/             # Servicio de API que maneja la lógica de obtención de datos
├── assets/               # Imágenes, logos y otros archivos estáticos
├── App.jsx               # Componente principal de la app y enrutamiento
├── main.jsx              # Punto de entrada de la aplicación
├── shared.css            # Variables globales de CSS y estilos base


## Solución de Problemas
Si encontrás problemas al ejecutar el proyecto:

1. Asegurate de que todos los archivos necesarios estén presentes, incluyendo los de configuración (e.g., `package.json`, `vite.config.js`).
2. Verificá que las dependencias estén instaladas correctamente ejecutando `npm install`.
3. Comprobá que todas las rutas en las importaciones sean correctas y coincidan con la estructura de carpetas del proyecto.

## Licencia

Este proyecto fue desarrollado con fines educativos.
