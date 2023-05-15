import ButtonVT from '../../components/button/button';
import React, { useState, ChangeEvent } from 'react';
import {
  Typography,
  Grid,
  Alert,
  Stack,
  MenuItem,
  TextField,
} from '@mui/material';
import TemplatePage from '../../template/template-page/templatePage';
import { validarFormulario } from '../../utils/validacao-cadastro';
import { Container, Form } from './styles';
import TextFieldVT from '../../components/textField/textField';

const Cadastro = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    validarFormulario(selectedOption);
  };

  return (
    <TemplatePage labelButton=''>
      <Container>
        <Form>
          <Typography
            variant='h4'
            style={{ textDecoration: 'underline', paddingBottom: '2rem' }}
          >
            Cadastrar
          </Typography>
          <div>
            <h2>Dados pessoais</h2>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='nome'
                label='Nome completo'
                model='primary'
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='date'
                id='data-nascimento'
                label='Data de nascimento'
                model='primary'
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='number'
                id='cpf'
                label='CPF'
                model='primary'
                required
              />
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                id='genero'
                onChange={handleOptionChange}
                select
                label='Escolha seu Gênero'
                value={selectedOption}
                model='primary'
                required
              >
                <MenuItem value='M'>Masculino</MenuItem>
                <MenuItem value='F'>Feminino</MenuItem>
                <MenuItem value='O'>Outro</MenuItem>
              </TextFieldVT>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='tel'
                id='celular'
                label='Celular'
                model='primary'
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='tel'
                id='telefone'
                label='Telefone'
                model='primary'
              />
            </Grid>
          </Grid>
          <br></br>
          <div>
            <h2>Endereço</h2>
          </div>
          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='cep'
                label='CEP'
                model='primary'
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='logradouro'
                label='Logradouro'
                model='primary'
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='bairro'
                label='Bairro'
                model='primary'
                required
              />
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='complemento'
                label='Complemento'
                model='primary'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='cidade'
                label='Cidade/Estado'
                model='primary'
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='text'
                id='pais'
                label='País'
                model='primary'
                required
              />
            </Grid>
          </Grid>

          <br></br>
          <div>
            <h2>Login</h2>
          </div>

          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='email'
                id='email'
                label='Email'
                model='primary'
                required
              />{' '}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='password'
                id='senha'
                label='Senha'
                model='primary'
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextFieldVT
                type='password'
                id='confirmar_senha'
                label='Confirmar senha'
                model='primary'
                required
              />
            </Grid>
            <Stack direction={'row'} spacing={5} style={{ margin: '2rem 0' }}>
              <Alert severity='info'>
                Essas informações serão utilizadas apenas para fins de
                identificação e segurança, de acordo com as políticas de
                privacidade da nossa empresa.
              </Alert>
              <ButtonVT
                label={'Cadastrar'}
                model={'primary'}
                onClick={handleSubmit}
              ></ButtonVT>
            </Stack>
          </Grid>
        </Form>
      </Container>
    </TemplatePage>
  );
};
export default Cadastro;
