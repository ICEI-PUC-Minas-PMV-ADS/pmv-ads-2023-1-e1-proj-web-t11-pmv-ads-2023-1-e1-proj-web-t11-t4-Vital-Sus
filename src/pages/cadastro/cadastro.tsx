import ButtonVT from '../../components/button/button';
import React, { useState } from 'react';
import { Typography, Grid, Alert, Stack } from '@mui/material';
import TemplatePage from '../../template/template-page/templatePage';
import { validarFormulario } from '../../utils/validacao-cadastro';
import { Container, Form } from './styles';

const Cadastro = () => {
  return (
    <TemplatePage labelButton="">
      <Container>
        <Form>
          <Typography
            variant="h4"
            style={{ textDecoration: 'underline', paddingBottom: '2rem' }}
          >
            Cadastrar
          </Typography>
          <div>
            <h2>Dados pessoais</h2>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome-Completo"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="date"
                id="data-nascimento"
                name="data-nascimento"
                placeholder="Data de nascimento"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <input type="text" id="cpf" name="cpf" placeholder="cpf" />
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <select id="genero" onChange={() => {}}>
                <option>Escolha seu Genero</option>
                <option value={'M'}>Masculino</option>
                <option value={'F'}>Feminino</option>
                <option value={'O'}>Outro</option>
              </select>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="tel"
                id="celular"
                name="celular"
                placeholder="Celular"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
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
              <input type="text" id="cep" name="cep" placeholder="Cep" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="text"
                id="logradouro"
                name="logradouro"
                placeholder="Av/Rua"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Bairro"
              />
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="text"
                id="complemento"
                name="complemento"
                placeholder="Complemento"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Cidade/Estado"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <input type="text" id="pais" name="pais" placeholder="Brasil" />
            </Grid>
          </Grid>

          <br></br>
          <div>
            <h2>Login</h2>
          </div>

          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <input type="email" id="email" name="email" placeholder="Email" />{' '}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <input
                type="password"
                id="confirmar_senha"
                name="confirmar_senha"
                placeholder="Confirmar-senha"
              />
            </Grid>
            <Stack direction={'row'} spacing={5} style={{ margin: '2rem 0' }}>
              <Alert severity="info">
                Essas informações serão utilizadas apenas para fins de
                identificação e segurança, de acordo com as políticas de
                privacidade da nossa empresa.
              </Alert>
              <ButtonVT
                label={'Cadastrar'}
                model={'primary'}
                onClick={validarFormulario}
              ></ButtonVT>
            </Stack>
          </Grid>
        </Form>
      </Container>
    </TemplatePage>
  );
};
export default Cadastro;
