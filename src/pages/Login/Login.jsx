import React, {useState, startTransition } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import "./Login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {validarEmail, validarSenha} from "../../Utils/validacaoLogin";

const LoginPage = () => {
  const [loading, setLoading] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      alert("Login")
      setLoading(false)
    }
    catch (err){
      alert("Não foi possível realizar o Login" + err)
    }
   
  }

  const handleChange = (event) => {
    console.log('Digitando...', event.target.name, event.target.value)
  }
  
  return (
   <TemplatePage>
   <div id="login">
        <h1 className="title">Entrar</h1>
        <form classname="form_login" action="./pages/homepage/homepage.css">
            
            <div className="field">
                <TextField
                  onChange={handleChange}
                  helperText="Insira seu Email"
                  id="demo-helper-text-misaligned"
                  label="Email"
                  type='email'
                />  
            </div>
        
            <div className="field">
                <TextField
                onChange={handleChange}
                helperText="Insira a sua senha"
                id="outlined-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
               />
            </div>

            <div className="actions">
                <Button 
                 variant="contained"
                 type="submit"
                 onClick={handleSubmit}
                 //disable={!validandoInput()}
                 >Entrar</Button>
            </div>
        </form>  
    </div>
    
    <div className='container'>
       <p className='titulo'> Seja bem vindo ao
       <img src="img/Logo-VitalSus_black.png" alt="Logo_black"></img>
       </p>
       <div className='link'>
        <p> Ainda não é cadastrado?
            <a href="./pages/homePage/homePage">Clique aqui</a>
        </p>
       </div>
    </div>
    </TemplatePage>
  );
};


export default LoginPage;
