# Plano de Testes de Software

<style>
  .header {
    background-color: #616161;
    color: white;
    font-weight: bold;
    border: 2px solid black;
  }

  .content{
    border: 2px solid black;
  }

   .listNumber {
    list-style-type: decimal;
  }

  p {
    text-align: justify;
  }
</style>

Os planos de testes com casos de teste são documentos cruciais para garantir a qualidade do software. Eles descrevem a estratégia de teste, cronograma e recursos necessários, além de especificar os casos de teste a serem executados. Os casos de teste são cenários detalhados que definem os passos, entradas, ações e resultados esperados de cada teste. Com esses planos, é possível testar o software de forma organizada, identificar defeitos e garantir que o sistema atenda aos requisitos estabelecidos e às expectativas dos usuários.

Esses planos também são responsáveis por orientar a equipe de teste e fornecer uma estrutura para relatar e acompanhar os resultados dos testes. Eles abrangem diferentes tipos de testes, como testes de unidade, integração, sistema, desempenho e segurança. Ao seguir esses planos, é possível garantir uma abordagem estruturada e eficiente para o teste de software, assegurando a robustez do sistema e sua conformidade com os requisitos funcionais e não funcionais.

<table>
  <tr>
    <td class='header'>Caso de teste</td>
    <td class='content'> <b>CT-01</b> Vizuaizar página inicial</td>
  </tr>
  <tr>
    <td class='header'>Requisitos associados</td>
    <td class='content'>
        <b>RF-001</b>	O site deve apresentar uma página inicial visualize informaçoes sobre a triagem.<br />
        <b>RNF-002</b>	O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.	
    </td>
  </tr>
  <tr>
    <td class='header'>Objetivo do teste</td>
    <td class='content'> Verificar de a página inicial exibe corretamente</td>
  </tr>
  <tr>
    <td class='header'>Passos</td>
    <td class='content'>
        <li class='listNumber'> Inicie o programa com <i>npm start</i></li>
        <li class='listNumber'> Visualizar a página inicial</li>
    </td>
  </tr>
  <tr>
    <td class='header'>Critérios de êxito</td>
    <td class='content'>
        <li>Deve ser exibido a página inicial com duas sessões: "Se sentindo mal?" e "Benefícios de uma triagem online"</li>
        <li>Deve estar responsivo para desktop, tablet e mobile a página o header e o footer.</li>
    </td>
  </tr>
</table>

####Evidência:

![CT-01](img/xx.png)

---

<table>
  <tr>
    <td class='header'>Caso de teste</td>
    <td class='content'> <b>CT-02</b> Realizar acesso ao sistema através da tela login</td>
  </tr>
  <tr>
    <td class='header'>Requisitos associados</td>
    <td class='content'>
        <b>RF-002</b>	O site deve apresentar uma página onde o usuário faça o login.
    </td>
  </tr>
  <tr>
    <td class='header'>Objetivo do teste</td>
    <td class='content'> Verificar a autenticação do usuário cadastrado</td>
  </tr>
  <tr>
    <td class='header'>Passos</td>
    <td class='content'>
        <li class='listNumber'> Acessar a pagina de login clicando no botão "Entrar/Criar conta"</li>
        <li class='listNumber'> Informar email e senha já cadastrado</li>
        <li class='listNumber'> Exemplo - <b>email:</b> "usuario1@example.com"
    <b>senha:</b> "senhaSegura123"</li>
    <li class='listNumber'> Confirmar clicando no botão "Entrar"</li>
    </td>
  </tr>
  <tr>
    <td class='header'>Critérios de êxito</td>
    <td class='content'>
        <li>O botão só ficará habilitado caso o email e senha esteja cadastrado</li>
        <li>Ao clicar em "Entrar", deverá exibir um alert com login de sucesso e redirecionar para a página inicial</li>
    </td>
  </tr>
</table>

####Evidência:

![CT-02](img/xx.png)

---

<table>
  <tr>
    <td class='header'>Caso de teste</td>
    <td class='content'> <b>CT-03</b> Redirecionar usuário não cadastrado para tela de cadastro</td>
  </tr>
  <tr>
    <td class='header'>Requisitos associados</td>
    <td class='content'>
        <b>RF-003</b> A página login deve apresentar um "link" para redirecionar o usuário para página de cadastro.
    </td>
  </tr>
  <tr>
    <td class='header'>Objetivo do teste</td>
    <td class='content'> Verificar o direcionamento do usuário não cadastrado</td>
  </tr>
  <tr>
    <td class='header'>Passos</td>
    <td class='content'>
        <li class='listNumber'> Acessar a pagina de login</li>
        <li class='listNumber'> Clicar no link "Clique aqui"</li>
    </td>
  </tr>
  <tr>
    <td class='header'>Critérios de êxito</td>
    <td class='content'>
        <li>O usuário deve ser redirecionado a página cadastro da aplicação</li>
    </td>
  </tr>
</table>

####Evidência:

![CT-03](img/xx.png)

---

<table>
  <tr>
    <td class='header'>Caso de teste</td>
    <td class='content'> <b>CT-04</b> Cadastrar novos usuários</td>
  </tr>
  <tr>
    <td class='header'>Requisitos associados</td>
    <td class='content'>
        <b>RF-004</b> O site deve possuir funcionalidade de cadastro de novo usuários.
    </td>
  </tr>
  <tr>
    <td class='header'>Objetivo do teste</td>
    <td class='content'> Verificar o cadastro de novos usuários</td>
  </tr>
  <tr>
    <td class='header'>Passos</td>
    <td class='content'>
        <li class='listNumber'> Acessar a pagina de cadastro clicando no link "Clique aqui" na página de cadstro</li>
        <li class='listNumber'> Preencher todos os campos obrigatórios</li>
        <li class='listNumber'> Confirmar clicando no botão "Cadastrar"</li>
    </td>
  </tr>
  <tr>
    <td class='header'>Critérios de êxito</td>
    <td class='content'>
        <li>Ao clicar em "Cadastrar", deverá exibir um alert com cadastro de sucesso e redirecionar para a página inicial.</li>
        <li>Fazer download de um arquivo json com todas as informações de cadastro.</li>
    </td>
  </tr>
</table>

####Evidência:

![CT-04](img/xx.png)

---
