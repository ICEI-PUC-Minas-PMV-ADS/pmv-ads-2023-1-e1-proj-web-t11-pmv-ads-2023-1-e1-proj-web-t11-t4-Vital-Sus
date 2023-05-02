import React, { startTransition } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import "./Login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

 
const LoginPage = () => {
  return (
   <TemplatePage>
   <div id="login">
        <h1 className="title">Entrar</h1>
        <form classname="forma">
            <div className="field">
            <TextField
             helperText="Insira seu Email"
            id="demo-helper-text-misaligned"
            label="Email"
            />
            </div>
            <div className="field">
            <TextField
            helperText="Insira a sua senha"
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            />
            </div>
            <div className="actions">
            <Button variant="contained">Entrar</Button>
            </div>
        </form>  
    </div> 
    <div className='image'>
                <img src="img/LoginPage-img.png" alt="Imagem"/>
        </div>
    </TemplatePage>
  );
};

export default LoginPage;
