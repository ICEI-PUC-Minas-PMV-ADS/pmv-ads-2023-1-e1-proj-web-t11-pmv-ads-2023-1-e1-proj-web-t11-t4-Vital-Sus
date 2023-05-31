import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import CadastroV2 from '../pages/cadastro/cadastro';
import TriagemPage from '../pages/triagem/triagemPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastro' element={<CadastroV2 />} />
        <Route path='/triagem' element={<TriagemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
