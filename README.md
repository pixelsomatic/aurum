# Aurum
React e Wordpress Web App. <br />

Este projeto foi criado com [Create WP Theme](https://github.com/devloco/create-react-wptheme). <br />

Você pode acessar ver a versão online deste app aqui no [Heroku](/). <br />
O que você precisa fazer para executar este app:

## Requirements (Linux)

### `NODE`

* sudo apt update;
* sudo apt install nodejs;
* sudo apt install npm;

OBS: Em Windows é só vir aqui e pegar o instalador: [NODE.js](http://nodejs.org/).

### `Wordpress`

* Baixar [Wordpress](https://br.wordpress.org/download/);
* Instalar;
* No terminal vá para a pasta themes através do comando: cd wp-content/themes/
* $ npm i create-react-wptheme;
* $ npx create-react-wptheme aurum;

## Install

- $ cd aurum;
- $ git clone [git@github.com:Krsnananda/aurum.git](git@github.com:Krsnananda/aurum.git).
- $ rm -rf react-src;
- $ mv aurum react-src;

## Configuration

* Vá para a seção de temas dentro do painel do Wordpress, você encontrará uma mensagem de erro parecida com esta: **The following theme are installed but incomplete**;
* Em seu terminal, entre na pasta do projeto, entre na pasta react-src e digite: `npm run start`;
* Você receberá uma mensagem parecida com: **Your theme is not quite ready!**, então vá para a seção de temas dentro do painel Wordpress e você verá seu tema lá.
* Ative o tema;
* Vá para o terminal e digite novamente: `npm run start`;
* Pronto! :)

## Scripts

Neste projeto você pode rodar o comando:

### `npm run start`

Executa o app em modo de desenvolvimento. <br />
Assim que rodar o comando você verá seu tema executando no seu browser.

<br />

### `npm run test`

Lança o executador de testes em modo de observação interativa. <br />

### `npm run build`

Prepara o app para ser implementado em ambiente de produção, criando a pasta 'build'. <br />

Os arquivos serão minificados e o app estará pronto para o deploy :)

Em caso de dúvidas sobre o deploy é só consultar [deployment](https://facebook.github.io/create-react-app/docs/deployment).