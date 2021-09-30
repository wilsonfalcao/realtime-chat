# Realtime Chat with React Native
#### Exemplos de projetos com uso de tecnologias em tempo e real e manipulação de estado.

Esse projeto tem o intuito de prover exemplos de códigos com uso de tecnologias na implementação do chat em tempo real. Projeto divido em partes para fins didáticos e reúso de recursos específicos.

- Implementação de banco de dados NoSQL com Firestore e utilização do método [_onSnapshot()_](https://firebase.google.com/docs/firestore/query-data/listen) 
- Refatorando código e implementando Redux na manipulação de estados do usuário e mensagem de forma global.
- Implementação de API React com WebSocket.IO e requisições bidirecionais.

### Divisão do projeto

- [Projeto com uso do Firestore (sem uso do Redux)](https://github.com/wilsonfalcao/realtime-chat/tree/redux)
- [Projeto com uso do Firestore e Redux](https://github.com/wilsonfalcao/realtime-chat/tree/firebase)
- [Projeto consumindo uma API React WebSocket.IO](https://github.com/wilsonfalcao/realtime-chat-socket)

## Bibliotecas utilizadas na criação de projetos

Para utilização ou conhecimento de cada recurso utilizado neste projeto poderá ser obtido mais detalhes pelo site abaixo.

- [react-navigation/native](https://reactnavigation.org/)
- [react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/)
- [reduxjs/toolkit](https://redux-toolkit.js.org/)
- [expo-crypto](https://docs.expo.dev/versions/latest/sdk/crypto/)
- [expo-google-app-auth](https://docs.expo.dev/versions/latest/sdk/google/)
- [firebase](https://github.com/firebase/firebase-js-sdk)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-redux](https://react-redux.js.org/)

### Observações quanto ao uso de algumas bibliotecas acima

Alguns recursos foram usados por falta de compatibilidade com o framework Expo, alguns recursos são:
- _expo-crypto_ para o empacotamento de mensagens do usuário e definição do ID único da mensagem no banco de dados. A biblioteca _SHA256_ possui algumas incompatibilidades em projetos com expo. 

### Estrutura de pastas

Para o entendimento do projeto segue o esquema de pastas de todo o projeto e suas respectivas funções seguindo padrão MVC.

- **src** (pasta raiz de implementação de view, model e controller)
-- **componentes** (todos os recursos aqui são chamados para auxílio do modelo viewer)
-- **model** (camada de serviços do projeto e instâncias)
-- **controllers** (funções de manipulação de atributos de métodos e estados da aplicação)
-- **pages** (camada de lógica visual da aplicação)
-- **store** (árvore de estado da aplicação utilizando Redux)


### Uso do Redux

Para melhor entendimento do uso desse pattern poderá ser obtido algumas informações e projetos [aqui](https://github.com/wilsonfalcao/react-native-redux-example1)

## Instalação

Certificar se todo ambiente do React Native ou [Expo CLI](https://reactnative.dev/docs/environment-setup) instalada na sua máquina.
Abra a pasta desse projeto e execute o comando abaixo:
```sh
npm install
```

## Screenshots

![Image 01](https://raw.githubusercontent.com/wilsonfalcao/realtime-chat-socket/main/fotos/screenshot01.jpg)
