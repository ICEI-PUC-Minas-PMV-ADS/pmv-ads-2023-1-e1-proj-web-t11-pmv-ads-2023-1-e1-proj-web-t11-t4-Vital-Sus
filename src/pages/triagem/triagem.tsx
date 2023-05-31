import { Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import { ContainerTabs, TabsTriagem } from './styles';
import ButtonVT from '../../components/button/button';
import TextFieldVT from '../../components/textField/textField';
import CheckboxVT from '../../components/checkbox/checkbox';
import RadioButtonVT from '../../components/radioButton/radioButton';

const Triagem = () => {
  const [activeTab, setActiveTab] = useState(0); // Estado para controlar a tab ativa

  // Função para atualizar a tab ativa
  const handleTabChange = (event: React.ChangeEvent<{}>, newTab: number) => {
    setActiveTab(newTab);
  };

  const handleNextTab = () => {
    setActiveTab(activeTab + 1);
  };

  const handlePreviousTab = () => {
    setActiveTab(activeTab - 1);
  };

  return (
    <ContainerTabs>
      <TabsTriagem
        orientation='vertical'
        variant='scrollable'
        value={activeTab}
        onChange={handleTabChange}
        textColor='inherit'
      >
        <Tab label='Informações do Paciente' />
        <Tab label='Sintomas' />
        <Tab label='Histórico Médico' />
      </TabsTriagem>

      <Stack
        direction={'column'}
        style={{
          width: '100%',
          margin: '0 auto',
          padding: '2rem',
          height: '80vh',
        }}
      >
        {activeTab === 0 && (
          <div>
            <p>Informações</p>
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <p>Sintomas</p>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <p>Histórico</p>
          </div>
        )}
        <Stack
          direction={'row'}
          style={{
            width: '100%',
            marginTop: 'auto',
            padding: '1rem 0',
            justifyContent: 'space-between',
          }}
        >
          <ButtonVT
            model='primary'
            label='Anterior'
            disabled={activeTab === 0}
            onClick={handlePreviousTab}
          />
          {activeTab === 2 ? (
            <ButtonVT model='primary' label='Enviar' onClick={() => {}} />
          ) : (
            <ButtonVT model='primary' label='Próximo' onClick={handleNextTab} />
          )}
        </Stack>
      </Stack>
    </ContainerTabs>
  );
};

export default Triagem;
