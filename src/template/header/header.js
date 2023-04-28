import React from 'react';
import './header.css';

function Header({ showButton, labelButton, showMyAccount }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="img/logo-VitalSUS.png" alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <a href="/">Página Inicial</a>
        <a href="/triagem">Triagem</a>
      </nav>
      {showMyAccount && (
        <nav className="minha-conta">
          <a href="/perfil">Meu Perfil</a>
        </nav>
      )}
      {showButton && <button className="botao">{labelButton}</button>}
    </header>
  );
}

export default Header;
