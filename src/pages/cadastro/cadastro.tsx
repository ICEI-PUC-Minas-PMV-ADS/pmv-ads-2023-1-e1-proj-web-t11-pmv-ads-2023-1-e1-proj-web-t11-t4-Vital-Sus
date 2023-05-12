import React from 'react';
import { Alert, Container, Grid, Stack, Typography } from '@mui/material';
import TextFieldVT from '../../components/textField/textField';
import { StyledBox, StyledGrid } from './styles';
import ButtonVT from '../../components/button/button';
import TemplatePage from '../../template/template-page/templatePage';

const CadastroV2 = () => {
  return (
    <TemplatePage labelButton="">
      <Container>
        <Typography variant="h2">Cadastrar</Typography>
        <StyledBox>
          <Stack direction="row" spacing={3} className="stack_buttons">
            <ButtonVT label={'Usuário'} model={'secundary'}></ButtonVT>
            <ButtonVT label={'Funcionário'} model={'secundary'}></ButtonVT>
          </Stack>
          <Typography variant="h3">Dados Pessoais</Typography>
          <StyledGrid container>
            <Stack direction="row" spacing={5}>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  fullWidth
                  label={'Nome'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'Data de Nascimento'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'CPF'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
            </Stack>
          </StyledGrid>
          <Typography variant="h3">Endereço</Typography>
          <StyledGrid container>
            <Stack direction="row" spacing={5}>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  fullWidth
                  label={'CEP'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'Logradouro'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'Bairro'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
            </Stack>
            <Stack direction="row" spacing={5} className="stack_endereco">
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  fullWidth
                  label={'Complemento'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'Cidade/Estado'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'País'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
            </Stack>
          </StyledGrid>
          <Typography variant="h3">Login</Typography>
          <StyledGrid container>
            <Stack direction="row" spacing={5}>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  fullWidth
                  label={'Email'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'Senha'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextFieldVT
                  required
                  label={'Confirmação da senha'}
                  model={'primary'}
                ></TextFieldVT>
              </Grid>
            </Stack>
          </StyledGrid>
          {/* <StyledGrid>
         <Grid className="stack_end">
       </StyledGrid> */}
        </StyledBox>
        <Alert severity="info">
          Essas informações serão utilizadas apenas para fins de identificação e
          segurança, de acordo com as políticas de privacidade da nossa empresa.
        </Alert>
        <ButtonVT label={'Cadastrar'} model={'primary'}></ButtonVT>
      </Container>
    </TemplatePage>
  );
};

export default CadastroV2;
