import React, { useState } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import { ContainerPage, Login, ContainerLogo, Link, Image } from './Style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { aprovarLogin } from '../../utils/validacaoLogin';

const LoginPage = () => {
  const [form, setForm] = useState<FormData>({
    email: '',
    senha: '',
  });

  interface FormData {
    email: string;
    senha: string;
  }

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    aprovarLogin(form.email, form.senha);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <TemplatePage showButton={false} labelButton={''}>
      <ContainerPage>
        <Login>
          <h1 className='title'>Entrar</h1>
          <form>
            <div className='field'>
              <TextField
                name='email'
                onChange={handleChange}
                helperText='Insira seu Email'
                id='demo-helper-text-misaligned'
                label='Email'
                type='email'
              />
            </div>

            <div className='field'>
              <TextField
                name='senha'
                onChange={handleChange}
                helperText='Insira a sua senha'
                id='outlined-password-input'
                label='Senha'
                type='password'
                autoComplete='current-password'
              />
            </div>

            <div className='actions'>
              <Button variant='contained' type='submit' onClick={handleSubmit}>
                Entrar
              </Button>
            </div>
          </form>
        </Login>

        <ContainerLogo>
          <p className='titulo'>
            {' '}
            Seja bem vindo ao
            <Image src='img/Logo-VitalSus_black.png' alt='Logo_black'></Image>
          </p>
          <Link>
            <p>
              {' '}
              Ainda não é cadastrado? 
              <a href='./cadastro'>Clique aqui</a>
            </p>
          </Link>
        </ContainerLogo>
      </ContainerPage>
    </TemplatePage>
  );
};

export default LoginPage;
