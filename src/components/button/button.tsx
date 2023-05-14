import React from 'react';
import { StyleButton } from './styles';

export interface ButtonProps {
  label: string;
  showMyAccount?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  model?: 'primary' | 'secundary';
}

const ButtonVT = ({ label, onClick, model, fullWidth }: ButtonProps) => {
  return (
    <StyleButton
      variant="contained"
      onClick={onClick}
      model={model}
      fullWidth={fullWidth}
    >
      {label}
    </StyleButton>
  );
};

export default ButtonVT;
