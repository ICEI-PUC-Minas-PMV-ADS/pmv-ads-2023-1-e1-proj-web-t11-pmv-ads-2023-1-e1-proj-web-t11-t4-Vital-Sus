import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import HomePage from './pages/homePage/homePage';*/
import Cadastro from './pages/cadastro/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);