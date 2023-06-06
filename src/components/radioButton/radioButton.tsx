import React from 'react';
import { Radio, FormControlLabel } from '@mui/material';

interface RadioButtonProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const RadioButtonVT: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange = () => {},
}) => {
  const handleRadioChange = () => {
    onChange(value);
  };

  return (
    <FormControlLabel
      control={
        <Radio
          checked={checked}
          onChange={handleRadioChange}
          value={value}
          style={{ color: '#005F89' }}
        />
      }
      label={label}
      style={{ color: 'black', cursor: 'pointer' }}
    />
  );
};

export default RadioButtonVT;
