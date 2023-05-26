import React from 'react';
import ReactDOM from 'react-dom';
import openai from 'openai'; // Importar el módulo openai
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App openai={openai} /> {/* Pasar el módulo openai como una prop a App */}
  </React.StrictMode>
);