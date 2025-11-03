# 📰 Blog com React, Vite e Sanity.io

Este projeto é um **blog** que desenvolvi utilizando **React** com **Vite** e o **Sanity.io** como CMS (Content Management System).  
O objetivo foi criar uma aplicação dinâmica, onde os conteúdos podem ser gerenciados de forma simples e eficiente, sem necessidade de alterar o código-fonte.

## 🎯 Objetivo

Meu objetivo com este projeto foi praticar o desenvolvimento de aplicações **headless** utilizando **React** no front-end e **Sanity.io** no back-end.  
Busquei entender na prática como conectar um CMS a uma interface moderna, explorando o consumo de APIs, roteamento e performance com Vite.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Sanity.io](https://www.sanity.io/)
- [React Router DOM](https://reactrouter.com/)
- HTML5 / CSS3 / JavaScript (ES6+)

## 🧩 Funcionalidades

- 📰 Listagem de posts publicados no Sanity
- 🔍 Visualização detalhada de cada artigo
- 🖼️ Exibição de imagens, autor e data de publicação
- 🧠 Conexão dinâmica com o CMS (sem precisar atualizar o código)
- ⚡ Carregamento rápido graças ao Vite

## 🌐 Integração com o Sanity

O projeto utiliza o **Sanity Client** para buscar os dados em tempo real.  
A comunicação é feita via **API GROQ**, permitindo filtrar, ordenar e buscar dados diretamente do painel do CMS.

Exemplo de query:
```js
const query = `*[_type == "post"]{ title, slug, mainImage, body }`;
```

## 🔮 Melhorias Futuras

- Sistema de busca por título e categoria  
- Página de autor  
- Paginação dos posts  
- Deploy no Vercel ou Netlify  

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, aprendi sobre:
- Integração entre **React** e **Sanity.io**;
- Configuração e deploy de um CMS headless;
- Otimização de performance com **Vite**;
- Organização modular de componentes e rotas.

## 📄 Licença

Este projeto é pessoal e voltado para fins de aprendizado.  
Sinta-se à vontade para consultar, estudar ou se inspirar no código.