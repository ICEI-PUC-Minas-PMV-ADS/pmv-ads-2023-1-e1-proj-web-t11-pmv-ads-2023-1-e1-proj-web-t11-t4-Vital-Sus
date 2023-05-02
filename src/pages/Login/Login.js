import React, { startTransition } from 'react';
import TemplatePage from '../../template/template-page/templatePage';
import "./Login.css";
 
const LoginPage = () => {
  return (
   <TemplatePage>
   <div id="login">
        <h1 className="title">Entrar</h1>
        <form classname="forma">
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="field">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password"/>
            </div>
            <div className="actions">
                <button type="submit">Entrar</button>
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
