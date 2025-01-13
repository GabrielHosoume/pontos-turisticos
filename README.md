# Cadastro de Pontos Turísticos

Este projeto tem como objetivo implementar uma aplicação web para o cadastro e listagem de pontos turísticos de um país, com funcionalidades de cadastro, busca e listagem paginada.

## Objetivo do Teste

Avaliar a capacidade de evolução de uma solução para o problema proposto, levando em consideração as melhores práticas de desenvolvimento, organização do código e conhecimento nas tecnologias solicitadas.

## Requisitos do Teste

Tecnologias exigidas:
- **C# (CSharp)**
- **SQL** (SQLite ou SQL Server)
- **HTML/CSS**

## Funcionalidades

- **Cadastro de Pontos Turísticos**:
  - Nome, descrição (máximo de 100 caracteres), localização (endereço ou referência de localização), cidade e estado.
- **Listagem de Pontos Turísticos**:
  - Exibição paginada dos pontos turísticos cadastrados.
  - Ordenação dos pontos turísticos de forma decrescente pela data de inclusão.
  - Busca/filtragem por nome, descrição e localização.
- **Detalhamento de Ponto Turístico**:
  - Exibição de detalhes completos (nome, descrição e localização) ao clicar em um ponto turístico na listagem.

## Instruções para Execução

### 1. Clone o repositório:

```bash
git clone https://github.com/GabrielHosoume/pontos-turisticos.git
```

### 2. Configuração do Banco de Dados
Para configurar o banco de dados, execute os seguintes passos:
- Importe o banco contido no diretório `./databases` (podendo ser via 'Import Data-tier Application') ou pelo script .sql


### 3. Configurações do Backend
- Após ter importado o banco, configure a string de conexão no arquivo `appsettings.json` no projeto do backend, substituindo o valor de `"PontoTuristicoCon"` . Exemplo:

```json
"ConnectionStrings": {
    "PontoTuristicoCon": "Data Source=DESKTOP-FPCBBHQ\\SQLEXPRESS;Initial Catalog=PontoTuristico;Integrated Security=true;TrustServerCertificate=True"
},
```

- Se necessário, restaurar os pacotes NuGet com o comando `dotnet restore`.

### 4. Configurações do Frontend
- Possuir o NodeJs para executar o projeto ReactJs
- Na raiz do projeto, adequar a `config.js`, alterando a `apiUrl` com a URL em que o backend estiver rodando.
Exemplo:
```javascript
apiUrl: 'https://localhost:7205/api/v1',
```

Observação: a url deverá conter `/api/v1`, conforme no exemplo.

- Com a API Rest em execução, basta executar a aplicação frontend com o comando
```bash 
npm run dev
```