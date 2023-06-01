import React, { useState } from 'react';
import { Radio, FormControlLabel } from '@mui/material';

interface RadioButtonProps {
  label: string;
  value: string;
}

const RadioButtonVT: React.FC<RadioButtonProps> = ({ label, value }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControlLabel
      control={
        <Radio
          checked={selectedValue === value}
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
