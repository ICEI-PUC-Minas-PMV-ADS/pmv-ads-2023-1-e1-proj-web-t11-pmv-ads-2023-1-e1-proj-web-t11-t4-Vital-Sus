import React, { ChangeEvent } from 'react';
import { StyledTextField } from './styles';

export interface TextFieldVTProps {
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
  required?: boolean;
  select?: boolean;
  model?: 'primary' | 'secundary';
  id?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  value?: unknown;
}

const TextFieldVT = ({
  label,
  model,
  fullWidth,
  required,
  select,
  id,
  type,
  children = null,
  onClick,
  onChange,
  value,
}: TextFieldVTProps) => {
  let fieldValue = value;
  if (children && React.isValidElement(children)) {
    const childElement = children as React.ReactElement<any>;
    if (childElement.props.value !== undefined) {
      fieldValue = childElement.props.value;
    }
  }

  return (
    <StyledTextField
      select={select}
      type={type}
      onClick={onClick}
      id={id}
      label={label}
      variant="outlined"
      size="small"
      model={model}
      fullWidth={fullWidth}
      required={required}
      onChange={onChange}
      value={fieldValue}
    >
      {children}
    </StyledTextField>
  );
};

export default TextFieldVT;
