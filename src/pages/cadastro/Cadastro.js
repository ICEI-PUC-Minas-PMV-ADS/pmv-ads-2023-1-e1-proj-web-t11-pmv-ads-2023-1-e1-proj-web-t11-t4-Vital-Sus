import './Cadastro.css';
import TemplatePage from '../../template/template-page/templatePage';

function Cadastro() {
  return (
    <TemplatePage>
      <div className="Cadastro">
        <div>
          <body>
            <header>
              <h1>Cadastrar</h1>
            </header>
            <main>
              <button>
                <h3>Usuario</h3>
              </button>
              <button>
                <h3>Funcionario</h3>
              </button>
              <div>
                <h3>Dados Pessoais</h3>
              </div>

              <form method="post">
                <label for="nome">Nome Completo*</label>
                <label for="data-nascimento">Data de nascimento*</label>
                <label for="cpf">CPF*</label>
                <br />
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome-Completo"
                />
                <input
                  type="data"
                  id="data-nascimento"
                  name="data-nascimento"
                  placeholder="00/00/0000"
                />
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="00000000000"
                />
                <br />

                <br></br>
                <label for="genero">Genero</label>
                <label for="celular">Celular</label>
                <label for="telefone">telefone</label>
                <br></br>
                <select onchange="genero()" id="genero">
                  <option>Escolha seu Genero</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  placeholder="(31)9xxx-xxxx"
                />
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(31)xxxx-xxxx"
                />

                <br></br>

                <header>
                  <h3>Endereço</h3>
                </header>

                <br></br>

                <label for="cep">Cep*</label>
                <label for="logradouro">Logradouro*</label>
                <label for="bairro">Bairro*</label>
                <br></br>

                <input
                  type="number"
                  id="cep"
                  name="cep"
                  placeholder="xxxxx-xxx"
                />
                <input
                  type="text"
                  id="logradouro"
                  name="logradouro"
                  placeholder="Av/Rua"
                />
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro"
                />
                <br></br>

                <br></br>

                <label for="complemento">Complemento*</label>
                <label for="cidade">Cidade/Estado*</label>
                <label for="pais">Pais*</label>
                <br></br>

                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  placeholder="Ap-casa"
                />
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade/Estado"
                />
                <input type="text" id="pais" name="pais" placeholder="Brasil" />
                <br></br>

                <br></br>

                <header>
                  <h3>Login</h3>
                </header>

                <br></br>
                <label for="email">E-mail*</label>
                <label for="senha*">Senha*</label>
                <label for="confirmar_senha">Confirmação da senha*</label>
                <br></br>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                />
                <input
                  type="passoword"
                  id="senha"
                  name="senha"
                  placeholder="senha"
                />
                <input
                  type="passoword"
                  id="confirmar_senha"
                  name="confirmar_senha"
                  placeholder="confirmar-senha"
                />
                <br />
                <br></br>
                <p id="box" name="box">
                  {' '}
                  Essas informações serão utilizadas apenas para fins de
                  identificação e segurança de acordo com as politicas de
                  privacidade da nossa empresa.
                </p>
                <input type="submit" id="cadastrar" value="Cadastrar"></input>
              </form>
            </main>
          </body>
        </div>
      </div>
    </TemplatePage>
  );
}

export default Cadastro;
