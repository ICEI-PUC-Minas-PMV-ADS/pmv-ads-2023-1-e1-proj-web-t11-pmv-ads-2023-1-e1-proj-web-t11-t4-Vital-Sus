import React from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import Triagem from './triagem';
import { TypographyTriagem } from './styles';

const TriagemPage = () => {
  return (
    <TemplatePage labelButton='Sair'>
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
