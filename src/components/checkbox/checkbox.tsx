import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
} from '@mui/material';

export interface CheckboxVTProps extends FormControlLabelProps {}

const CheckboxVT = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ color: '#005F89' }}
        />
      }
      label={props.label}
      {...props}
      style={{ color: 'black', cursor: 'pointer' }}
    />
  );
};

export default CheckboxVT;
