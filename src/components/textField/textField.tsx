import React, { ChangeEvent } from 'react';
import { StyledTextField } from './styles';
import { BaseTextFieldProps } from '@mui/material';

export interface TextFieldVTProps extends BaseTextFieldProps {
  model?: 'primary' | 'secundary';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldVT = ({
  model,
  children = null,
  onChange,
  ...props
}: TextFieldVTProps) => {
  return (
    <StyledTextField
      variant='outlined'
      size='small'
      model={model}
      onChange={onChange}
      {...props}
    >
      {children}
    </StyledTextField>
  );
};

export default TextFieldVT;
