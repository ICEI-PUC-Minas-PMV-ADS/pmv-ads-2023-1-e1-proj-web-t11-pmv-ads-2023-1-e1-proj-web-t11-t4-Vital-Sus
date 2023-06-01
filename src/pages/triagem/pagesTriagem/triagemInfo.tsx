import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Item } from '../../homePage/styles';
import RadioButtonVT from '../../../components/radioButton/radioButton';
import TextFieldVT from '../../../components/textField/textField';
import { StyleItem } from '../styles';

const TriagemInfo = () => {
  return (
    <div>
      <Typography>Você é o paciente?</Typography>
      <Stack direction={'row'}>
        <Item>
          <RadioButtonVT label='Sim' value='S' />
        </Item>
        <Item>
          <RadioButtonVT label='Não' value='N' />
        </Item>
      </Stack>
      <Stack direction={'column'}>
        <StyleItem>
          <TextFieldVT model='tertiary' label='Nome completo do paciente' />
        </StyleItem>
        <StyleItem>
          <TextFieldVT model='tertiary' type='number' label='CPF do paciente' />
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
    </div>
  );
};

export default TriagemInfo;
