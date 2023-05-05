import React from 'react';
import { StyleButton } from './styles';

export interface ButtonProps {
  label: string;
  showMyAccount?: boolean;
  onClick?: () => void;
  model?: 'primary' | 'secundary';
}

const ButtonVT = ({ label, onClick, model }: ButtonProps) => {
  return (
    <StyleButton variant="contained" onClick={onClick} model={model}>
      {label}
    </StyleButton>
  );
};

export default ButtonVT;
