// filename: src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'; // Corrected Import
import { NotFound } from './components/NotFound/NotFound';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting="¡Bienvenidos! acá ven toods nuestros productos" />} />
          <Route path="/category/:categoryId" element={<ItemsListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
