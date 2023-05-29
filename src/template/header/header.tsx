import React from 'react';
import ButtonVT from '../../components/button/button';
import Menu from '../../components/menu/menu';
import { Content, HeaderContainer, Logo } from './styles';
import { useMediaQuery } from '@mui/material';
import { retrieveDisplayDesktop } from '../../styles/breakpoints';
import { useNavigate } from 'react-router-dom';

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
  const displayDesktop = useMediaQuery(retrieveDisplayDesktop());
  const navigate = useNavigate();

  const renderDesktopHeader = (props: HeaderProps) => (
    <>
      <nav className='nav'>
        <a href='/'>Página Inicial</a>
        <a href='/cadastro'>Triagem</a>
        {showMyAccount && <a href='/perfil'>Meu Perfil</a>}
      </nav>
      {showButton && (
        <ButtonVT
          model={'primary'}
          label={labelButton}
          onClick={() => navigate('/Login')}
        />
      )}
    </>
  );

  const renderMobileHeader = (props: HeaderProps) => <Menu {...props} />;

  return (
    <HeaderContainer>
      <Logo src='img/logo-VitalSUS.png' alt='Logo' className='logo' />
      <Content>
        {displayDesktop
          ? renderDesktopHeader({
              ...{ showButton, labelButton, showMyAccount, onClick },
            })
          : renderMobileHeader({
              ...{ showButton, labelButton, showMyAccount, onClick },
            })}
      </Content>
    </HeaderContainer>
  );
};

export default Header;
