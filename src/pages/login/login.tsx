import React, { useState } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import ButtonVT from '../../components/button/button';
import TextFieldVT from '../../components/textField/textField';
import { useNavigate } from 'react-router-dom';
import {
  aprovarLogin,
  validarEmail,
  validarSenha,
} from '../../utils/validacao-login';
import {
  Container,
  ContainerLink,
  ContainerLogo,
  ContainerPage,
  Image,
  TitleTypography,
  TypographLogin,
  TypographyLink,
} from './styles';
import { Grid, Link, Stack } from '@mui/material';

const LoginPage = () => {
  const [form, setForm] = useState<FormData>({
    email: '',
    senha: '',
  });

  interface FormData {
    email: string;
    senha: string;
  }

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userAutenticado = await aprovarLogin(form.email, form.senha);
    if (userAutenticado) {
      navigate('/');
    }
  };

  const validadorImput = (): boolean => {
    return validarEmail(form.email) && validarSenha(form.senha);
  };
  console.log('o form está válido', validadorImput());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <TemplatePage showButton={false} labelButton={''}>
      <ContainerPage>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <form>
              <TypographLogin variant='h5' className='title'>
                Entrar
              </TypographLogin>
              <Stack direction={'column'} style={{ margin: '2rem 0' }}>
                <TextFieldVT
                  name='email'
                  model='primary'
                  onChange={handleChange}
                  label='Email'
                  type='email'
                  required
                  style={{ marginBottom: '1.5rem' }}
                />

                <TextFieldVT
                  name='senha'
                  model='primary'
                  onChange={handleChange}
                  label='Senha'
                  type='password'
                  autoComplete='current-password'
                  required
                />
              </Stack>
              <ButtonVT
                model='primary'
                onClick={handleSubmit}
                label={'Entrar'}
                disabled={!validadorImput()}
              ></ButtonVT>
              <ContainerLink style={{ marginTop: '1.5rem' }}>
                <TypographyLink paragraph>
                  {'Ainda não é cadastrado? '}
                  <Link
                    underline='hover'
                    color='inherit'
                    href='./cadastro'
                    style={{ margin: '0 auto' }}
                  >
                    Clique aqui
                  </Link>
                </TypographyLink>
              </ContainerLink>
            </form>
          </Grid>
          <Grid item xs={6}>
            <Container>
              <ContainerLogo>
                <TitleTypography className='titulo' paragraph>
                  Seja bem vindo ao
                  <br />
                  <Image src='img/logo-black.png' alt='Logo_black'></Image>
                </TitleTypography>
              </ContainerLogo>
            </Container>
          </Grid>
        </Grid>
      </ContainerPage>
    </TemplatePage>
  );
};

export default LoginPage;
