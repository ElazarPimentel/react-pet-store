// filename: src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx';
import './shared.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
