import React, { useState } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import { validarEmail, validarSenha } from '../../utils/validadorInput';
import { ContainerPage, Login, ContainerLogo, Link, Image } from './Style';
import { aprovarLogin } from '../../utils/validacaoLogin';
import ButtonVT from '../../components/button/button';
import TextFieldVT from '../../components/textField/textField';
import { useNavigate } from 'react-router-dom';

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
        <Login>
          <h1 className='title'>Entrar</h1>
          <form>
            <div className='field'>
              <TextFieldVT
                name='email'
                model='primary'
                onChange={handleChange}
                helperText='Insira seu Email'
                label='Email'
                type='email'
                required
              />
            </div>

            <div className='field'>
              <TextFieldVT
                name='senha'
                model='primary'
                onChange={handleChange}
                helperText='Insira a sua senha'
                label='Senha'
                type='password'
                autoComplete='current-password'
              />
            </div>
            <ButtonVT
              model='primary'
              onClick={handleSubmit}
              label={'Entrar'}
              disabled={!validadorImput()}
            ></ButtonVT>
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
