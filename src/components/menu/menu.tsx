import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { HiMenu } from 'react-icons/hi';
import ButtonVT from '../button/button';
import { ButtonMenu } from './styles';

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

  return (
    <>
      <ButtonMenu onClick={handleClick}>
        <HiMenu />
      </ButtonMenu>
      <Drawer anchor="right" open={open} onClose={handleClick}>
        <List>
          <ListItem>
            <ListItemText primary="Página Inicial" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Triagem" />
          </ListItem>
          {showMyAccount && (
            <ListItem>
              <ListItemText primary="Meu perfil" />
            </ListItem>
          )}
          {showButton && (
            <>
              <Divider />
              <ListItem>
                <ButtonVT
                  label={labelButton}
                  model="primary"
                  onClick={onClick}
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
