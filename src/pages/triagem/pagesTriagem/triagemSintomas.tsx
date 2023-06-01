import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Item } from '../../homePage/styles';
import CheckboxVT from '../../../components/checkbox/checkbox';
import TextFieldVT from '../../../components/textField/textField';
import RadioButtonVT from '../../../components/radioButton/radioButton';
import { StyleTypography } from '../styles';

const TriagemSintomas = () => {
  return (
    <div>
      <StyleTypography variant='h5'>Selecione seus sintomas:</StyleTypography>
      <Stack direction={'column'}>
        <Stack direction={`row`}>
          <Item>
            <CheckboxVT label='Tosse'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Coriza'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Dor de Garganta'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Fadiga'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Dor no Corpo'></CheckboxVT>
          </Item>
        </Stack>
        <Stack direction={`row`}>
          <Item>
            <CheckboxVT label='Perda de Apetite'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Diarréia'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Vômito/Náusea'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Falta de Ar'></CheckboxVT>
          </Item>
          <Item>
            <CheckboxVT label='Sonolência'></CheckboxVT>
          </Item>
        </Stack>
      </Stack>
      <TextFieldVT
        model='tertiary'
        label='Outros sintomas:'
        multiline
        maxRows={3}
        style={{ padding: '1rem 0' }}
      />
      <StyleTypography variant='h5'>Selecione sua temperatura:</StyleTypography>
      <Stack direction={'column'}>
        <Item>
          <RadioButtonVT label='Hipertemia (41°C ou mais)' value='hiper' />
        </Item>
        <Item>
          <RadioButtonVT label='Febre alta (39.6ºC a 41ºC)' value='feba' />
        </Item>
        <Item>
          <RadioButtonVT label='Febre (37.6ºC a 39.5ºC)' value='feb' />
        </Item>
        <Item>
          <RadioButtonVT label='Normal (36ºC a 37.5ºC)' value='norm' />
        </Item>
        <Item>
          <RadioButtonVT label='Hipotermia (36ºC ou menos)' value='hipo' />
        </Item>
      </Stack>
    </div>
  );
};

export default TriagemSintomas;
