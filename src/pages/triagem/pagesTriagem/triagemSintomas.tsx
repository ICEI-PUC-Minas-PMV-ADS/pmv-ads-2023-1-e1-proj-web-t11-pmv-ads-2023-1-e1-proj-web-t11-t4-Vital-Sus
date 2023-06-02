import { Stack } from '@mui/material';
import React, { useState } from 'react';
import CheckboxVT from '../../../components/checkbox/checkbox';
import TextFieldVT from '../../../components/textField/textField';
import RadioButtonVT from '../../../components/radioButton/radioButton';
import { StyleTypography } from '../styles';

const TriagemSintomas = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioButtonChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <StyleTypography variant='subtitle1'>
        Selecione seus sintomas:
      </StyleTypography>
      <Stack direction={'row'} style={{ padding: '0 0 1rem 0' }}>
        <Stack direction={'column'}>
          <CheckboxVT label='Tosse'></CheckboxVT>
          <CheckboxVT label='Coriza'></CheckboxVT>
        </Stack>
        <Stack direction={'column'}>
          <CheckboxVT label='Dor de Garganta'></CheckboxVT>
          <CheckboxVT label='Fadiga'></CheckboxVT>
        </Stack>
        <Stack direction={`column`}>
          <CheckboxVT label='Dor no Corpo'></CheckboxVT>
          <CheckboxVT label='Perda de Apetite'></CheckboxVT>
        </Stack>
        <Stack direction={'column'}>
          <CheckboxVT label='Diarréia'></CheckboxVT>
          <CheckboxVT label='Vômito/Náusea'></CheckboxVT>
        </Stack>
        <Stack direction={'column'}>
          <CheckboxVT label='Falta de Ar'></CheckboxVT>
          <CheckboxVT label='Sonolência'></CheckboxVT>
        </Stack>
      </Stack>
      <TextFieldVT
        model='tertiary'
        label='Outros sintomas'
        multiline
        maxRows={3}
      />
      <Stack direction={'column'} style={{ padding: '1rem 0' }}>
        <StyleTypography variant='subtitle1'>
          Selecione sua temperatura:
        </StyleTypography>
        <RadioButtonVT
          label='Hipertemia (41°C ou mais)'
          value='hipertermia'
          checked={selectedValue === 'hipertermia'}
          onChange={handleRadioButtonChange}
        />
        <RadioButtonVT
          label='Febre alta (39.6ºC a 41ºC)'
          value='febre alta'
          checked={selectedValue === 'febre alta'}
          onChange={handleRadioButtonChange}
        />
        <RadioButtonVT
          label='Febre (37.6ºC a 39.5ºC)'
          value='febre'
          checked={selectedValue === 'febre'}
          onChange={handleRadioButtonChange}
        />
        <RadioButtonVT
          label='Normal (36ºC a 37.5ºC)'
          value='normal'
          checked={selectedValue === 'normal'}
          onChange={handleRadioButtonChange}
        />
        <RadioButtonVT
          label='Hipotermia (36ºC ou menos)'
          value='hipotermia'
          checked={selectedValue === 'hipotermia'}
          onChange={handleRadioButtonChange}
        />
      </Stack>
    </div>
  );
};

export default TriagemSintomas;
