<p align="center">
    <img src="https://github.com/rgerio/desafio-rn/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png" width="240px" alt="Meus Filmes">
    <h1 align="center">Meus Filmes</h1>
</p>
<h4 align="center">Um app que lista alguns filmes e exibe seus detalhes</h4>

<p align="center">
  <a href="https://github.com/react-native-community/releases/blob/master/CHANGELOG.md">
    <img src="https://img.shields.io/github/package-json/dependency-version/rgerio/desafio-rn/react-native?color=%2361dafb" alt="Project Dependencies">
  </a>
</p>

<br />

<p align="center">
  Compatível com Android e iOS
</p>

---

<p align="center">
  <a href="https://ibb.co/Svh7wX3">
    <img src="https://user-images.githubusercontent.com/19890903/101291770-f9a24100-37e9-11eb-8a86-ca935c166bbd.gif" alt="iOS Preview" border="0">
  </a>
</p>

---

# Meus Filmes
Desafio React Native da [Pitang](https://www.pitang.com/).

# Criar um aplicativo de consulta a API de Filmes #

Criar um aplicativo para consultar a API de Filmes e trazer os filmes enviados pelo endpoint. Seguem abaixo telas como guia:

![tela1](https://user-images.githubusercontent.com/7905193/33221593-75c45b4e-d12f-11e7-833c-cc4acbd5ef0e.png)
![tela2](https://user-images.githubusercontent.com/7905193/33221600-85b668ee-d12f-11e7-95fa-8f66bd47f6ab.png)

### **O aplicativo deve contemplar** ###

- __Uma lista de filmes__. Exemplo de chamada na API: `https://desafio-mobile-pitang.herokuapp.com/movies/list?page=0&size=3`.
    * [X] Paginação na tela de lista, com scroll infinito (incrementando o parâmetro `page`).
    * [X] Cada filme deve exibir Nome do filme e Foto do filme.
    * [X] Ao clicar em um item da lista, deve levar ao detalhe do filme.
- __Detalhes de um filme__. Exemplo de chamada na API: `https://desafio-mobile-pitang.herokuapp.com/movies/detail/59e8ec97f36d280364369ca1`.
    * [X] O item de detalhe deve exibir Nome, Foto e Descrição do filme.

### **Essencial** ##
* [X] React Native
* [X] Hooks ou Redux
* [X] Guidelines UX e UI.
* [X] Maior ou igual JavaScript ES6
* [X] Responsivo

### **Desejável** ###

* [X] Testes
* [X] Build no IOS

### **Sugestões** ###

Nesta seção sugerimos algumas bibliotecas para o uso, mas fique à vontade para escolher outras que não estiverem na lista.

* [X] Axios
* [X] Styled-components

### **Escolhas do autor** ###

* [X] Typescript
* [X] ESLint e Prettier

# Como executar

Execute os seguintes comandos num terminal:

```bash
# Clone este repo
git clone https://github.com/rgerio/desafio-rn && cd desafio-rn

# Instale as dependencias
yarn install
# Se estiver num Mac e deseja executar no iOS
cd ios && pod install && cd ..

# Excute o app
yarn android
# or
yarn ios
```
