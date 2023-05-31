import React from 'react';
import { StyleButton } from './styles';

export interface ButtonProps {
  label: string;
  showMyAccount?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  model?: 'primary' | 'secundary';
}

const ButtonVT = ({
  label,
  onClick,
  model,
  fullWidth,
  disabled,
}: ButtonProps) => {
  return (
    <StyleButton
      variant='contained'
      onClick={onClick}
      model={model}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {label}
    </StyleButton>
  );
};

export default ButtonVT;
