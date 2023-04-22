# ESPECIFICAÇÕES DO PROJETO

Os membros da equipe realizaram um trabalho de imersão para consolidar a definição
do problema e os pontos mais relevantes a serem abordados neste projeto, contando com a
participação dos usuários por meio de observações em seu ambiente habitual, estudos e
pesquisas. Os detalhes coletados foram organizados em personas e histórias de usuários para
guiar o design e desenvolvimento do produto ou serviço.

## Personas

Durante o processo de estudo foram coletadas informações como idade, ocupação,
motivação e frustrações. das personas identificadas durante o processo de entendimento do
problema. As personas são apresentadas nas figuras a seguir:


||Maria Aparecida dos Santos - 25 anos||
|-|-|-|
|![Gráfico de Impacto](img/usuário.png)| **Ocupação:** Balconista de lanchonete.| **Dispositivos:** Smartphone.|
|**Motivações:** Ficar menos tempo na espera de atendimento e evitar exposição desnecessária.| **Frustrações:** Demora de atendimento na rede pública e risco de contaminação por exposição.| **Hobbies:** Leitura e sinuca.

||Renata Texeira - 35 anos||
|-|-|-|
|![Gráfico de Impacto](img/assistente-administrativo.png)| **Ocupação:** Administrativa do Sus.| **Dispositivos:** Smartphone, desktop e tablet.|
|**Motivações:** Melhorar o ambiente de trabalho e reduzir o tempo de espera por atendimento.| **Frustrações:** Piora nos indicadores de atendimento e superlotação das unidades de saúde.| **Hobbies:** Yoga.

||Fernanda Amaral - 27 anos||
|-|-|-|
|![Gráfico de Impacto](img/enfermeira.png)| **Ocupação:** Enfermeira do sistema de saúde| **Dispositivos:** Smartphone, desktop e tablet|
|**Motivações:** Melhorar o ambiente de trabalho e otimizar o tempo de atendimento.| **Frustrações:** Sobrecarga de trabalho.| **Hobbies:** Leitura e música.

## Histórias de Usuários

A partir da compreensão das personas identificadas na etapa anterior, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Paciente       | Fazer o login junto ao site         | Começar o processo de triagem               |
|Paciente       | Preencher o questionário da triagem | Saber a prioridade e um pré-diagnostico do seu problema |
|Paciente       | Visualizar a marcação da consulta   | Saber qual unidade e especialidade que vai ser direcionado |
|Agente de saúde| Fazer login junto ao site com suas credenciais | Para ter acesso aos questionários dos pacientes |
|Agente de saúde| Analisar os questionários dos pacientes | Para fazer um pré-diagnostico e sua prioridade |
|Administrador  | Marcar consulta do paciente após triagem | Para direcionar os pacientes para unidades e sua especialidade correta |
|Administrador  | Notificar o paciente da consulta | Para diminuir as ausências |


## Requisitos do Projeto

Requisitos de um projeto de software são as especificações e funcionalidades que o
software deve possuir para atender às necessidades do usuário e dos objetivos do projeto. Eles descrevem o que o software deve fazer e como deve funcionar em termos de recursos, funcionalidades, desempenho, segurança, usabilidade, entre outros aspectos relevantes.

Os requisitos são uma parte essencial do processo de desenvolvimento de software, pois
ajudam a garantir que o software atenda às necessidades do usuário e do negócio e que sejaentregue dentro do prazo e do orçamento estabelecidos. Além disso, eles fornecem uma base clara para o design, implementação, teste e manutenção do software.

### Requisitos Funcionais

Requisitos funcionais são um tipo de requisito de um projeto de software que descrevem
as funções e tarefas específicas que o software deve executar para atender às necessidades do usuário e do negócio. Em outras palavras, eles descrevem o que o software deve fazer para cumprir sua finalidade.

Os requisitos funcionais desse projeto se apresentam na tabela abaixo:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar uma página inicial onde o usuário faça o login. | ALTA | 
|RF-002| O site deve apresentar uma página onde o profissional de saúde responsável pela triagem faça um login com suas credenciais.   | ALTA |
|RF-003| O site deve possuir funcionalidade de cadastro de novo usuários. | ALTA | 
|RF-004| O site deve permitir ao usuário que ele responda um questionário preestabelecido de triagem. | ALTA | 
|RF-005| O site deve permitir que o profissional de saúde tenha acesso aos questionários dos usuários. | ALTA | 
|RF-006| O site deve permitir que o profissional de saúde marque a consulta com a especificação e local correto do usuário. | ALTA | 
|RF-007| O site deve permitir o usuário visualizar as informações de sua marcação da consulta. | MÉDIA | 
|RF-008| O site deve permitir que o profissional de saúde verifique a agenda das unidades de saúde. | MÉDIA | 



### Requisitos não Funcionais

Requisitos não-funcionais são um tipo de requisito de um projeto de software que
descrevem as características que o software deve possuir, além das funcionalidades específicas
que ele deve executar. Eles descrevem como o software deve funcionar em termos de
desempenho, segurança, confiabilidade, usabilidade e outros aspectos relevantes. Os requisitos
não-funcionais são tão importantes quanto os requisitos funcionais, pois afetam diretamente a
qualidade e a usabilidade do software.

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender:

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Seguir boas práticas de SEO. Isso inclui técnicas de otimização on-page e garantir a facilidade de rastreamento pelos motores de busca. | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada. |  ALTA | 
|RNF-003| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |  ALTA | 
|RNF-004| Garantir acessibilidade, tornar o software utilizável por pessoas com deficiências visuais, auditivas, motoras ou cognitivas, bem como conformidade com os padrões de acessibilidade. |  MÉDIA | 

## Restrições

Restrições são um tipo de requisito de um projeto de software que descrevem limitações
ou restrições que devem ser consideradas no desenvolvimento do software. Essas restrições
podem incluir restrições técnicas, orçamentárias, de tempo ou de recursos humanos.

Alguns exemplos de restrições que podem ser consideradas em um projeto de software são:

- Restrições técnicas: podem incluir limitações de hardware, software, linguagens de
programação, padrões de codificação, entre outros aspectos técnicos que devem ser
considerados no desenvolvimento do software.

- Restrições orçamentárias: podem incluir limitações de orçamento ou de recursos
financeiros disponíveis para o projeto.

- Restrições de tempo: podem incluir prazos para a entrega do software ou para a
conclusão de etapas específicas do projeto.

- Restrições de recursos humanos: podem incluir limitações na disponibilidade de
membros da equipe ou na quantidade de recursos humanos disponíveis para o projeto.
As restrições do projeto se encontram na tabela a seguir:

|ID     | Descrição   |
|-------|-------------------------|
|RE-001| Para acessar o aplicativo, é necessário estar conectado à internet e utilizar um browser que suporta o HTML 5.  |
|RE-002| O aplicativo será desenvolvido utilizando somente as tecnologias de front-end HTML 5, CSS e Javascript, limitando a escolha de outras tecnologias para o desenvolvimento do software.  | 
|RE-003| O aplicativo deve ser entregue com os backlogs de prioridade alta conforme definido pelo PO até Junho/2023.  |
|RE-004| O custo do site foi definido no valor de R$ 10.000,00 reais com os requisitos funcionais listados acima com um time de 5 colaboradores. |
|RE-005| Qualquer pedido de alteração feito pelo cliente deverá ser discutido com o time para ajustar prazo e custos. |