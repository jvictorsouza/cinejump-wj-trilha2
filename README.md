![image](https://user-images.githubusercontent.com/54218892/155206013-906de3fc-f4ed-4472-948f-aaf0381688ec.png)

# Cinejump

Projeto final da Trilha 2 para desenvolvedores Frontend React disponibilizado pela Academia Webjump, programa de capacitação interno da empresa Webjump Design em Informática. O projeto consiste em um website voltado para amostragem de filmes e séries.

## Motivação

Criação de uma plataforma com login, cadastro e home page com ReactJS e Typescript.

## Métodos e resultados

O projeto visa componentizar os principais elementos da página estruturando em módulos/containers as principais telas do projeto. Os principais componentes e módulos são:

- TextInput
- ToastNotification
- Header
- Footer
- Login
- Cadatro
- Home
- Favorites

## Projeto

O projeto tem como pilar as seguintes características/ferramentas:

- React
- Typescript - interfaces and types
- MUI - material-UI package
- TMDB API - axios package
- Youtube API - youtube-search package

## Requisitos e Instruções de execução

Primeiro de tudo é necessário configurar o arquivo .env com a url da API TMDB (REACT_APP_API_BASE_URL) juntamente com a key de acesso pessoal (REACT_APP_API_KEY), a url de acesso às imagens (IMAGE_BASE_URL) e por fim o token para acesso à API do Google, mais precisamente para a API Youtube Search (REACT_APP_API_GOOGLE_YOUTUBE_V3)

Valores exemplo:

- REACT_APP_API_BASE_URL = 'https://api.themoviedb.org/3'
- REACT_APP_API_KEY = 'AIzaSyB0dAPeTlnv9j-7vM3-RCNPWA0NFmppvo0'
- IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
- REACT_APP_API_GOOGLE_YOUTUBE_V3 = 'b9e1384462905203809836896979951d'

Configurado o arquivo .env, agora com o software NODE.js e o gerenciador de pacotes npm instalados, execute as instruções abaixo na pasta raiz do projeto:

```console
npm install
npm run start
```

Acesse a url http://localhost:8080/


## Vídeo demonstrativo

https://user-images.githubusercontent.com/54218892/155205941-c66cbb2b-438b-45f7-894d-ee6035ee49c0.mp4
