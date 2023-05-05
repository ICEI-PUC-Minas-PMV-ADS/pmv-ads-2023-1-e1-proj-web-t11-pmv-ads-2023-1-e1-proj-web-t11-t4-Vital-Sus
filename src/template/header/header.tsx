import React from 'react';
import './header.css';
import ButtonVT from '../../components/button/button';

export interface HeaderProps {
  showButton?: boolean;
  labelButton: string;
  showMyAccount?: boolean;
  onClick?: () => void;
}

const Header = ({
  showButton,
  labelButton,
  showMyAccount,
  onClick,
}: HeaderProps) => {
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
          model={'primary'}
          label={labelButton}
          onClick={onClick}
        ></ButtonVT>
      )}
    </header>
  );
};

export default Header;
