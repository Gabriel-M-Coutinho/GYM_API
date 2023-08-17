# API GYM

**Descrição:** Esta API permite gerenciar usuários e seus dados. Foi desenvolvida utilizando o framework Express do Node.js e o banco de dados MongoDB com a biblioteca Mongoose. A autenticação JWT (Json Web Token) é utilizada para garantir a segurança das rotas.

## Endpoints

### Cadastro de Usuários

**Rota:** `POST /signin`
**Descrição:** Cadastra novos usuários na aplicação.
**Parâmetros:** Objeto JSON no corpo da requisição com nome, email e senha.
**Resposta:** Status de sucesso ou erro.

### Login de Usuários

**Rota:** `POST /login`
**Descrição:** Permite que usuários façam login.
**Parâmetros:** Objeto JSON no corpo da requisição com email e senha.
**Resposta:** Token JWT para autenticação.

### Edição de Usuários

**Rota:** `PUT /edituser/:id`
**Descrição:** Permite que usuários editem seus próprios dados.
**Parâmetros:** ID do usuário na URL e objeto JSON no corpo da requisição.
**Resposta:** Status de sucesso ou erro.

### Obter Dados do Usuário

**Rota:** `GET /user/:id`
**Descrição:** Obtém os dados de um usuário específico.
**Parâmetros:** ID do usuário na URL.
**Resposta:** Dados do usuário.

### Adicionar Usuário

**Rota:** `POST /user`
**Descrição:** Adiciona um novo usuário.
**Parâmetros:** Objeto JSON no corpo da requisição com nome, email e senha.
**Resposta:** Status de sucesso ou erro.

### Obter Lista de Usuários

**Rota:** `GET /user`
**Descrição:** Obtém a lista de todos os usuários.
**Resposta:** Lista de usuários.

### Editar Usuário

**Rota:** `PUT /user/edit/:id`
**Descrição:** Edita os dados de um usuário específico.
**Parâmetros:** ID do usuário na URL e objeto JSON no corpo da requisição.
**Resposta:** Status de sucesso ou erro.

### Excluir Usuário

**Rota:** `DELETE /user/:id`
**Descrição:** Exclui um usuário específico.
**Parâmetros:** ID do usuário na URL.
**Resposta:** Status de sucesso ou erro.

## Middleware de Autenticação JWT

**Middleware:** `ProtectRoute`
**Descrição:** Autenticação JWT para proteger rotas.
**Funcionamento:** Verifica e valida o token JWT no cabeçalho da requisição.
**Ação:** Permite ou nega o acesso à rota protegida.

## Banco de Dados

**Banco de Dados:** MongoDB
**Descrição:** Banco de dados NoSQL orientado a documentos.
**ODM:** Mongoose é usado como Object Data Modeling para interagir com o MongoDB.

## Dependências

- `express`: Biblioteca Node.js para criar APIs web.
- `mongoose`: Biblioteca Node.js para interagir com o MongoDB.
- `cors`: Middleware para habilitar o CORS em requisições HTTP.
- `jsonwebtoken (jwt)`: Biblioteca Node.js para autenticação com tokens JWT.
- `nodemon`: Biblioteca de desenvolvimento para reiniciar o servidor automaticamente.
- `dotenv`: Biblioteca para carregar variáveis de ambiente.

## Configuração

- **Porta:** A aplicação utiliza a porta 4000.
- **Conexão com Banco de Dados:** Feita através de `./DB/db.js` com o Mongoose.
- **Autenticação JWT:** Implementada em `./middlewares/jwt.js` para proteger rotas.
- **Controladores:** Implementados em `./controller/User.js`.
- **Variáveis de Ambiente:** Configurações precisam ser definidas no `.env`.

## Postman

- [Link para a coleção no Postman](https://restless-rocket-722930.postman.co/workspace/Team-Workspace~af464cc5-7a2d-4447-8387-5c2e6f7ead4c/collection/22658973-74a9f9f5-de80-4702-822d-864c14b2e76e?action=share&creator=22658973)
