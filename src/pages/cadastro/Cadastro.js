import './Cadastro.css';
import TemplatePage from '../../template/template-page/templatePage';
import ButtonVT from '../../components/button/button';
import Grid from '@mui/material/Unstable_Grid2';
import { validarFormulario } from '../../utils/validacao2';
import { getValue } from '@testing-library/user-event/dist/utils';

const Cadastro = () => {

  return (
    <>
      <TemplatePage>
        <div class="container cadastro">
          <div>
            <h1>Cadastrar usuário</h1>
          </div>
          <form >
            <div>
              <h2>Dados pessoais</h2>
            </div>

            <Grid container rowspacing={2}>
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
                  type="data"
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

            <Grid container rowspacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <select onchange="genero()" id="genero">
                  <option>Escolha seu Genero</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
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

            <Grid container rowspacing={2}>
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

            <Grid container rowspacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <input
                  type="text"
                  id="complemeto"
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

            <Grid container rowspacing={2}>
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

              <Grid class="final" container rowspacing={2}>
                <Grid item xs={12} sm={8} md={8}>
                  <p class="box" id="box" name="box">
                    {' '}

                    Essas informações serão utilizadas apenas para fins de
                    identificação e segurança de acordo com as politicas de
                    privacidade da nossa empresa.
                  </p>{' '}
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <ButtonVT onClick={validarFormulario} class="confirmar" type="submit" id="confirmar" model={'primary'} label={'Cadastrar'}></ButtonVT>
                </Grid>
              </Grid>

            </Grid>
          </form>
        </div>

      </TemplatePage>

    </>
  );
}
export default Cadastro;

