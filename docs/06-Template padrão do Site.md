# Template padrão do site

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>

# TEMPLATE PADRÃO DO SITE

O layout padrão utilizado nas páginas do site é a base estrutural que define como a informação é organizada e apresentada ao usuário. O layout a ser utilizado tem correspondência com o projeto de interface, conforme ilustrado na figura abaixo:

Figura 1 - Template padrão do site
![UserFlow](img/Template_padrão.png)

O template padrão do site está disponibilizado no GitHub Link= .

O site e composto pelos seguintes layouts:

- **Cabeçalho para navegação possibilitando acesso a:**
  - Página inicial
  - Formulário para triagem
- **Rodapé (footer) possuindo informações de:**
  - Contato
  - Cadastro de Email para notificações

A responsividade da aplicação foi desenvolvida utilizando o frimework React

# Componentes de estilização

Durante o desenvoolvimento da aplicação foi criado componentes de estilização para padronizar as paginas e tornar a experiência do usuário mais agradável. Esses componentes de estilização incluem a definição de cores, fontes, tamanhos de elementos, espaçamento e outros elementos visuais que são aplicados aos:

- **botôes de validação**
  Figura 2 - Botão validação
  ![UserFlow]()

- **caixas de inserção de texto**  
  Figura 3 - Caixa de texto
  ![UserFlow]()

- **menu de navegação**
  Figura 4 - Menu
  ![UserFlow]()

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

> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
