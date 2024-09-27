// filename: src/router/router.jsx

import { Routes, Route } from 'react-router-dom';
import { ItemsListContainer } from '../components/ItemsListContainer/ItemsListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../components/Cart/Cart';  // Import the Cart component
import { NotFound } from '../components/NotFound/NotFound';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ItemsListContainer greeting="¡Bienvenidos! Aquí están todos nuestros productos." />} />
      <Route path="/category/:categoryId" element={<ItemsListContainer />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />  
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
