import { Alert, Snackbar, Stack, Tab } from '@mui/material';
import React, { useState } from 'react';
import { ContainerTabs, TabsTriagem } from './styles';
import ButtonVT from '../../components/button/button';
import TriagemInfo from './pagesTriagem/triagemInfo';
import TriagemSintomas from './pagesTriagem/triagemSintomas';
import TriagemHistory from './pagesTriagem/triagemHistory';
import { SnackbarOrigin } from '@mui/material/Snackbar';

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

  const [open, setOpen] = React.useState(false);
  const [snackbarPosition, setSnackbarPosition] = useState<SnackbarOrigin>({
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick = () => {
    setOpen(true);
    setTimeout(function () {
      window.location.href = '/';
    }, 2000);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSnackbarPositionChange = () => {
    setSnackbarPosition({
      vertical: 'top',
      horizontal: 'right',
    });
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
            <TriagemInfo />
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <TriagemSintomas />
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <TriagemHistory />
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
            <ButtonVT
              model='primary'
              label='Enviar'
              onClick={() => {
                handleClick();
              }}
            />
          ) : (
            <ButtonVT model='primary' label='Próximo' onClick={handleNextTab} />
          )}
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={snackbarPosition}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity='success'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Triagem realizada com sucesso!
        </Alert>
      </Snackbar>
    </ContainerTabs>
  );
};

export default Triagem;
