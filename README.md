# dinamica_teste

Nesta dinâmica você deve criar (utilizando ReactJS, NodeJS, MongoDB):

# Deploy
* Link p/ a aplicação web: https://chat-app-teste.netlify.app
* Link p/ a API: https://chat-app-teste.herokuapp.com

# Instalando Dependências
Executar `yarn install` ou ``npm install` nas pasta raiz do projeto

# Executando projeto

## Front-end

Executar `yarn start` na pasta raíz do projeto `client/`

## Back-end

Executar `yarn dev` na pasta raiz `server/`

## Aplicação usuário:

1- Realizar página de login

- [x] Somente usar o campo username para realizar o login
- [x] Não é necessário ter autenticação

2- Criar ambiente de chat online

- [x] Deve ter um campo para o usuario inserir a mensagem
- [x] Algo indentificando na tela qual o usuário está logado
- [x] Ter um área onde são exibidas as mensagens no seguinte formato:
      'DD/MM/YY - 'username' - HH:MM => 'mensagem'

#### Essa área que as mensagens serão exibidas deve:

- [x] Mostrar as mensagens de todos os usuários e organizadas das mais novas para as mais velhas de baixo para cima.
- [x] Esta área deve atualizar sempre que um usuário enviar alguma mensagem
  - [x] _Plus: Utilizar redux_

## Aplicação consultor:

1- Realizar página de login

- [x] Usar campo username para login
  - [ ] _Plus: + password para realizar o login e utilizar autenticação_

2- O consultor então terá os seguintes campos que serão utilizados para organizar as mensagens enviadas e exibir para o consultor:

- [ ] Filtro por username
- [ ] Filtro por data
- [x] Ordenar por mais recentes/mais antigas
  - [ ] _Plus: Apagar mensagens_
- [x] preferencialmente utilizar o create-react-app para desenvolver o front end

- [x] - 3 - Crie uma Api Rest em node que irá gerar uma lista com nomes de 117 participantes.

- [x] - Em Seguida Crie uma rota para ser consumida (essa rota irá retornar seu JSON de participantes).

Atenção não é necessário o uso de banco de dados aqui, mas se utilizar será contado como um plus.

4 - Criar uma página que consuma a API de cima, listando os participantes e em seguida dividindo todos em 4 grupos de forma aleatória e automática.

Critério para geração de grupos: Alguns terão mais usuários que os outros, pois a divisão não é exata, mas crie de uma forma que o sistema distribua buscando deixar os grupos da forma mais equalitária possível. A divisão deve ser automática, considerando a quantidade de grupos
