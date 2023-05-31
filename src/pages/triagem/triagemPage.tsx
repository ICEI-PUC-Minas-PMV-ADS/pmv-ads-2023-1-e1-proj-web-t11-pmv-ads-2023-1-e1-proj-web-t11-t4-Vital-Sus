import React from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import Triagem from './triagem';
import { Typography } from '@mui/material';
import { TypographyTriagem } from './styles';

const TriagemPage = () => {
  return (
    <TemplatePage labelButton=''>
      <div style={{ width: '100%' }}>
        <TypographyTriagem variant='h5'>
          Questionário de Triagem
        </TypographyTriagem>
        <Triagem />
      </div>
    </TemplatePage>
  );
};

export default TriagemPage;
