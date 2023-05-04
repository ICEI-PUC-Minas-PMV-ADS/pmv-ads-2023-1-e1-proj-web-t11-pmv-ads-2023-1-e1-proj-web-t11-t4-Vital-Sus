import React from 'react';
import './header.css';
import ButtonVT from '../../components/button/button';

const Header = ({ showButton, labelButton, showMyAccount, onClick }) => {
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
      {showButton && (
        <ButtonVT
          className="botao"
          model={'primary'}
          label={labelButton}
          onClick={onClick}
        ></ButtonVT>
      )}
    </header>
  );
};

export default Header;
