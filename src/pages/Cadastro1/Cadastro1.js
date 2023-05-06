import './Cadastro1.css';
import TemplatePage from '../../template/template-page/templatePage';
import ButtonVT from '../../components/button/button';
import React from 'react';
/*import Grid from '@mui/material/Grid'; // Grid version 1*/
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


function Cadastro1() {
    return(
        <>
        <TemplatePage>
            <div class="container cadastrar">
            <div><h1>Cadastrar</h1></div>
            
            
            <Grid container rowspacing={1}columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}  >
                    <ButtonVT model={"secundary"} label={"Usuario"}></ButtonVT ></Grid>
                <Grid xs={6}>
                    <ButtonVT model={"secundary"} label={"Funcionario"}></ButtonVT ></Grid>
            </Grid>
        
            <Grid container rowspacing={2}>
                <Grid xs={4}>
                <input type="text" id="nome" name="nome" placeholder="Nome-Completo"/></Grid>
                <Grid xs={4}>
                <input type="data" id="data-nascimento" name="data-nascimento" placeholder="Data de nascimento"/></Grid>
                <Grid xs={4}>
                <input type="text" id="cpf" name="cpf" placeholder="cpf"/></Grid>
    
            </Grid>
            <br></br>
            <br></br>

            <Grid container rowspacing={2}>
                <Grid xs={4}>
                <select onchange="genero()" id="genero">
                  <option>Escolha seu Genero</option>
                  <option>Masculino</option>
                  <option>Feminino</option></select></Grid>
                <Grid xs={4}>
                <input type="tel" id="celular" name="celular" placeholder="Celular"/></Grid>

                <Grid xs={4}>
                <input type="tel" id="telefone" name="telefone" placeholder="(31)Telefone"/></Grid>
    
            </Grid>
            <br></br>
            <br></br>

            <Grid container rowspacing={2}>
                <Grid xs={4}>
                  <input type="text" id="cep" name="cep" placeholder="Cep"/></Grid>
                <Grid xs={4}>
                <input type="text" id="logradouro" name="logradouro" placeholder="Av/Rua"/></Grid>

                <Grid xs={4}>
                <input type="text" id="bairro" name="bairro" placeholder="Bairro"/></Grid>
    
            </Grid>
            <br></br>
            <br></br>

            <Grid container rowspacing={2}>
                <Grid xs={4}>
                  <input type="text" id="complemeto" name="complemento" placeholder="Complemento"/></Grid>
                <Grid xs={4}>
                <input type="text" id="cidade" name="cidade" placeholder="Cidade/Estado"/></Grid>

                <Grid xs={4}>
                <input type="text" id="pais" name="pais" placeholder="Brasil"/></Grid>
    
            </Grid>

            <br></br>
            <br></br>

            <Grid container rowspacing={2}>
                <Grid xs={4}>
                <input type="email" id="email" name="email" placeholder="email"/> </Grid>
                <Grid xs={4}>
                    <input type="passoword" id="senha" name="senha" placeholder="senha"/>
                </Grid>

                <Grid xs={4}>
                <input type="passoword" id="confirmar_senha" name="confirmar_senha" placeholder="confirmar-senha"/>
                </Grid>

                <Grid container rowspacing={2}>
                <Grid xs={8}>
                <p id="box" name="box">
                  {' '}
                  Essas informações serão utilizadas apenas para fins de
                  identificação e segurança de acordo com as politicas de
                  privacidade da nossa empresa.
                </p> </Grid>
                <Grid xs={4}>
                <input type="submit" id="cadastrar" value="Cadastrar"></input>
                </Grid>
    
            </Grid>


            </div>

        

        </TemplatePage>       
        
        </>
    );
};
export default Cadastro1;