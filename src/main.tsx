import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent transitions on page load
document.documentElement.classList.add('preload');
window.addEventListener('load', () => {
  document.documentElement.classList.remove('preload');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
