import React, {useState} from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import "./Login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {validarEmail, validarSenha} from "../../Utils/validacaoLogin";
import UserService from "../../Services/LoginService";


const LoginPage = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])

  const formulario = document.querySelector('#formulario');

  function validarUsuario(loginUser, passUser, dados) {
  
    return dados.usuarios.some(u => u.usuario === loginUser && u.senha === passUser);
  }
   
  fetch("./dados")
.then(response => {
   return response.json()
})

.then(jsondata => alert(jsondata))
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    localStorage.setItem("email", form.email)
    localStorage.setItem("senha", form.senha)

    const loginUser = localStorage.getItem("email")
    const passUser = localStorage.getItem("senha")

  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})

  }

  const validadorImput = () => {
    return validarEmail(form.email) && validarSenha(form.senha) 
  }

  console.log("o form está válido", validadorImput())
  
  return (
   <TemplatePage>
   <div id="login">
        <h1 className="title">Entrar</h1>
        <form classname="form_login" action="./pages/homepage/homepage.css">
            
            <div className="field">
                <TextField
                  name= "email"
                  onChange={handleChange}
                  helperText="Insira seu Email"
                  id="demo-helper-text-misaligned"
                  label="Email"
                  type='email'
                />  
            </div>
        
            <div className="field">
                <TextField
                name="senha"
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
                 disable={loading === true || validadorImput()}
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
