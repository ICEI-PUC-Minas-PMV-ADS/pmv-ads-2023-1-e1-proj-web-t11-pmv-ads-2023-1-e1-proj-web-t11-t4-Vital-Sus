import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import CadastroV2 from '../pages/cadastro/cadastro';
import TriagemPage from '../pages/triagem/triagemPage';
import LoginPage from '../pages/login/login';
import HomePageOn from '../pages/homePage/homePageOn';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/on' element={<HomePageOn />} />
        <Route path='/cadastro' element={<CadastroV2 />} />
        <Route path='/triagem' element={<TriagemPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
