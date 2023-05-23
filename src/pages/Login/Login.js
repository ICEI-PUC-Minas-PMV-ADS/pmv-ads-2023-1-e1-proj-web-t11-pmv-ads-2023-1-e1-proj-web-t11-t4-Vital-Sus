import React, {useState} from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import "./Login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {validarEmail, validarSenha} from "../../Utils/validacaoLogin";
import  {obterJSON} from "../../Services/obterJSON";



const LoginPage = () => {

  const [form, setForm] = useState([])

  const dataUser = "/dados.json";
  let dadosUser = obterJSON(dataUser);
  console.log(dadosUser)
 
  
    if (dadosUser) {
 

      const emailStorage = localStorage.getItem("email")
      const senhaStorage = localStorage.getItem("senha")
      
      if (emailStorage) {      

          if (JSON.stringify(dadosUser.email) === JSON.stringify(emailStorage)) {
            if (senhaStorage) {
              if (JSON.stringify(dadosUser.senha) === senhaStorage){
                console.log("dados são iguais")
                alert("Login autorizado")
              }
            }
          console.log('O');
          } else {
          console.log('Os dados são diferentes!');
          }
      } 
 
    }
  
    
  const handleSubmit = async (event) => {
    event.preventDefault();
 
      localStorage.setItem("email", form.email)
      localStorage.setItem("senha", form.senha)
      alert("dados armazenados no localstorage")
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
  )
}


export default LoginPage;
