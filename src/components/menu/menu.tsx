import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { HiMenu } from 'react-icons/hi';
import ButtonVT from '../button/button';
import { ButtonMenu } from './styles';
import { useNavigate } from 'react-router-dom';

export interface MenuProps {
  showButton?: boolean;
  labelButton: string;
  showMyAccount?: boolean;
  onClick?: () => void;
}

const Menu = ({
  showButton,
  labelButton,
  showMyAccount,
  onClick,
}: MenuProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <>
      <ButtonMenu onClick={handleClick}>
        <HiMenu />
      </ButtonMenu>
      <Drawer anchor='right' open={open} onClose={handleClick}>
        <List>
          <ListItem>
            <a href='/' style={{ color: '#000000', textDecoration: 'none' }}>
              Página Inicial
            </a>
          </ListItem>
          <ListItem>
            <a
              href='/triagem'
              style={{ color: '#000000', textDecoration: 'none' }}
            >
              Triagem
            </a>
          </ListItem>
          {showMyAccount && (
            <ListItem>
              <ListItemText primary='Meu perfil' />
            </ListItem>
          )}
          {showButton && (
            <>
              <Divider />
              <ListItem>
                <ButtonVT
                  label={labelButton}
                  model='primary'
                  onClick={() => navigate('/login')}
                  fullWidth
                />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
