import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/homePage/homePage';
/*import Cadastro from './cadastro/Cadastro';*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

