# Learn Electron

Este é um projeto de exemplo usando Electron para criar um aplicativo de desktop com funcionalidades básicas. O projeto é projetado para estudo e demonstração de boas práticas, incluindo a utilização de um servidor JSON para dados mockados e a comunicação entre o processo principal e o renderer.

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Documentação de Código](#documentação-de-código)

## Introdução

Este projeto é uma aplicação desktop criada com Electron. O objetivo é fornecer um exemplo completo que inclui a comunicação entre o processo principal e o renderer, bem como a integração com uma API para obter dados mockados.

## Instalação

### Pré-requisitos

Certifique-se de ter o Node.js e npm instalados no seu sistema. Você pode verificar isso executando:

- **Comando:** `node -v`
- **Comando:** `npm -v`

### Passos para Instalação

1. Clone o repositório:

   - **Comando:** `git clone https://github.com/seu-usuario/learn-electron.git`
   - **Comando:** `cd learn-electron`

2. Instale as dependências:

   - **Comando:** `npm install`

3. Inicie o servidor JSON:

   - **Comando:** `npm run server`

4. Inicie a aplicação Electron:

   - **Comando:** `npm start`

## Uso

- **Obter a Taxa de Câmbio:** Clique no botão "Get Exchange Rate" para obter a taxa de câmbio atual entre USD e BRL.

## Funcionalidades

- **Comunicação entre Processos:** Utiliza o IPC (Inter-Process Communication) para permitir a comunicação entre o processo principal do Electron e o renderer.
- **Obtenção de Dados Mockados:** Faz chamadas para uma API mockada utilizando o `fetch` para obter dados de taxas de câmbio.
- **Interface do Usuário Básica:** Interface simples criada com HTML e JavaScript para interagir com a aplicação Electron.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```bash
learn-electron/
│
├── src/
│ ├── main/ # Código principal do Electron
│ │ ├── app.js # Arquivo principal do processo principal
│ │ ├── ipcHandlers.js # Manipuladores IPC
│ │
│ ├── renderer/ # Código do renderer (interface do usuário)
│ │ ├── index.html # Arquivo HTML principal
│ │ ├── preload.js # Script de pré-carregamento para segurança
│ │ ├── script.js # Código JavaScript da interface
│ │
│ ├── config/ # Configurações e utilitários
│ │ ├── api.js # Configuração do Axios (não usado atualmente)
│ │
│ ├── domain/ # Lógica de negócios
│ │ ├── models/ # Modelos de dados
│ │ │ └── exchangeRate.js # Modelo de taxa de câmbio
│ │ └── services/ # Serviços de dados
│ │ └── exchangeService.js # Serviço para obter taxas de câmbio
│
├── db.json # Dados mockados para o json-server
├── package.json # Arquivo de configuração do npm
└── README.md # Documentação do projeto
``` 

## Documentação de Código

### Arquivo `app.js`

Configura e inicializa a janela principal do Electron e define a lógica de manipulação IPC para interagir com o renderer.

- **Dependências Usadas:** `electron`, `path`
- **Função Principal:** `createWindow()` - Cria a janela principal do aplicativo e define o menu da aplicação.

### Arquivo `ipcHandlers.js`

Manipuladores IPC para definir como a aplicação responde a mensagens do renderer.

- **Dependências Usadas:** `electron`
- **Função Principal:** Define manipuladores para eventos IPC, incluindo a solicitação de taxas de câmbio.

### Arquivo `exchangeService.js`

Serviço para buscar a taxa de câmbio da API mockada.

- **Dependências Usadas:** `node-fetch`
- **Função Principal:** `fetchExchangeRate()` - Faz uma chamada para a API mockada e retorna a taxa de câmbio.

### Arquivo `exchangeRate.js`

Modelo de dados para representar uma taxa de câmbio.

- **Função Principal:** Define a estrutura e o comportamento para representar taxas de câmbio, incluindo a moeda de origem e destino e a taxa.

### Arquivo `index.html`

Arquivo HTML principal para a interface do usuário.

- **Função Principal:** Define a estrutura básica da página e inclui referências para scripts e estilos.

### Arquivo `preload.js`

Script de pré-carregamento para o renderer.

- **Função Principal:** Exponha métodos seguros do processo principal para o renderer, garantindo a segurança e o isolamento.

### Arquivo `script.js`

Código JavaScript da interface do usuário.

- **Função Principal:** Interage com o DOM, lida com eventos e solicita dados do processo principal via IPC.

### Arquivo `db.json`

Dados mockados utilizados pelo `json-server`.

- **Função Principal:** Fornece dados fictícios para simular uma API.

### Arquivo `package.json`

Arquivo de configuração do npm.

- **Função Principal:** Define as dependências, scripts e configurações do projeto.