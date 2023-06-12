import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Item } from '../../homePage/styles';
import RadioButtonVT from '../../../components/radioButton/radioButton';
import TextFieldVT from '../../../components/textField/textField';
import { StyleItem, StyleTypography } from '../styles';

const TriagemInfo = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioButtonChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <StyleTypography variant='subtitle1'>Você é o paciente?</StyleTypography>
      <Stack direction={'row'}>
        <Item>
          <RadioButtonVT
            label='Sim'
            value='Sim'
            checked={selectedValue === 'Sim'}
            onChange={handleRadioButtonChange}
          />
        </Item>
        <Item>
          <RadioButtonVT
            label='Não'
            value='Não'
            checked={selectedValue === 'Não'}
            onChange={handleRadioButtonChange}
          />
        </Item>
      </Stack>
      {selectedValue === 'Não' && (
        <Stack direction={'column'}>
          <StyleItem>
            <TextFieldVT
              model='tertiary'
              type='string'
              label='Nome completo do paciente'
            />
          </StyleItem>
          <StyleItem>
            <TextFieldVT
              model='tertiary'
              type='number'
              label='CPF do paciente'
            />
          </StyleItem>
          <StyleItem>
            <TextFieldVT
              model='tertiary'
              type='date'
              InputLabelProps={{ shrink: true, required: true }}
              label='Data de nascimento'
            />
          </StyleItem>
        </Stack>
      )}
    </div>
  );
};

export default TriagemInfo;
