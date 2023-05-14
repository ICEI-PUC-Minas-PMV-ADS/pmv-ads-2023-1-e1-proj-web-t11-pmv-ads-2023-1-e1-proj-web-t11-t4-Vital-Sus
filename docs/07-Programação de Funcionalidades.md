# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

# FUNCIONALIDADE DO SISTEMA (TELAS)

Nesta seção, são apresentadas as telas correspondentes a cada uma das funcionalidades do sistema, acompanhadas das orientações de acesso. Essas informações são fornecidas para que os usuários possam acessar as diferentes funcionalidades do sistema de forma rápida e eficiente

## Tela Principal

A tela principal informa aos usuários os objetivos da aplicação, inclui informações importantes sobre o processo de triagem, como instruções para os usuários e benefícios da utilização da aplicação no processo de triagem. Possui links para acesso as demais paginas de login e cadastro no sistema.

Figura 2 - Tela Principal
![UserFlow]()

**Artefatos gerados da funcionalidade**

- Login.js
- Login.css
- Validaçãologin.js

## Tela Login (RF-001)

Tela permite ao usuário cadastrado acesso ao sistema Vital SUS. Na tela e possível identificar os campos de **Email** e **Senha** para acesso do usuário cadastrado, possui o logo com o nome da aplicação e link para cadastro caso o usuário não possua.

Figura 2 - Tela Login
![UserFlow]()

**Requisitos atendidos**

- RF-001

**Artefatos gerados da funcionalidade**

- Login.js
- Login.css
- Validaçãologin.js

## Tela cadastro (RF-003)

Na tela de cadastro, os usuários podem inserir suas informações pessoais para permitir a sua identificação e criar uma conta de acesso ao sistema Vital SUS e A página inclui campos para preenchimento de dados:

- **informações necessárias para identificação dos pacientes:**
  - nome completo
  - data de nascimento
  - telefone de contato
  - email
  - endereço completo
- **campos para cadastro de acesso:**
  - Email
  - Senha

A página de cadastro também apresenta a funcionalidade de identificar o tipo de usuário que está realizando o registro, podendo ser agente de saúde ou paciente, por meio de um menu localizado na parte superior da tela. Essa opção é importante para que o sistema possa direcionar os usuários para as funcionalidades adequadas, dependendo do perfil selecionado.

Figura 2 - Tela Cadastro
![UserFlow]()

**Requisitos atendidos**

- RF-003

**Artefatos gerados da funcionalidade**

- Cadastro.Tsx
- style.ts
- Validação-cadastro.ts
- dados.json

## Tela questionário (RF-004)

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)