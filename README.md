# Desafio Zuvia Node JS

Desert_Poke_Api: API de Gerenciamento de Usuários e Pokémons

Descrição:
Esta é uma API que permite gerenciar usuários e pokémons. Ela foi desenvolvida usando o framework Express do Node.js e utiliza o banco de dados MongoDB através da biblioteca Mongoose. A API é protegida por autenticação JWT (Json Web Token) para garantir a segurança das rotas.

Funcionalidades:

### Cadastro de Usuários:

    Rota: POST /signin
    Descrição: Permite cadastrar novos usuários na aplicação. Requer um objeto JSON no corpo da requisição contendo os dados do usuário, incluindo nome, email e senha. Os dados do usuário são validados e, se válidos, são armazenados no banco de dados MongoDB.

### Login de Usuários:

    Rota: POST /login
    Descrição: Permite que os usuários façam login na aplicação. Requer um objeto JSON no corpo da requisição contendo o email e a senha do usuário. Os dados são validados e, se corretos, um token JWT é gerado e retornado na resposta para ser utilizado em requisições futuras que exigem autenticação.

### Edição de Usuários:

    Rota: PUT /edituser/:id
    Descrição: Permite que os usuários autenticados editem seus próprios dados. Requer o ID do usuário como parâmetro na URL e um objeto JSON no corpo da requisição contendo os dados a serem atualizados, como nome, email e senha. Os dados são validados e, se corretos, são atualizados no banco de dados.

### Obter Status do Pokémon:

    Rota: GET /poke/status/:id
    Descrição: Permite que os usuários autenticados obtenham o status de um pokémon específico. Requer o ID do pokémon como parâmetro na URL. Os dados são buscados no banco de dados e retornados na resposta.

### Obter URL do Pokémon:

    Rota: GET /poke/:id
    Descrição: Permite que os usuários obtenham a URL de um pokémon específico. Requer o ID do pokémon como parâmetro na URL. Os dados são buscados no banco de dados e a URL é retornada na resposta.

### Adicionar Pokémon:

    Rota: POST /poke
    Descrição: Permite que os usuários autenticados adicionem um novo pokémon à sua lista. Requer um objeto JSON no corpo da requisição contendo os dados do pokémon, como nome, tipo e nível. Os dados são validados e, se corretos, são armazenados no banco de dados.

### Obter Lista de Pokémons:

    Rota: GET /poke
    Descrição: Permite que os usuários autenticados obtenham a lista de todos os pokémons adicionados por eles. Os dados são buscados no banco de dados e retornados na resposta.

###  Editar Pokémon:

    Rota: PUT /poke/edit/:id
    Descrição: Permite que os usuários autenticados editem os dados de um pokémon específico de sua lista. Requer o ID do pokémon como parâmetro na URL e um objeto JSON no corpo da requisição contendo os dados a serem atualizados 'name', 'type1','type2'  Os dados são validados e, se corretos, são atualizados no banco de dados.

### Excluir Pokémon:

    Rota: DELETE /poke/:id
    Descrição: Permite que os usuários autenticados excluam um pokémon específico de sua lista. Requer o ID do pokémon como parâmetro na URL. O pokémon é removido do banco de dados.

### Middleware de Autenticação JWT:

    Middleware: ProtectRoute
    Descrição: É um middleware de autenticação JWT que protege rotas que exigem autenticação. Ele verifica se o token JWT está presente no cabeçalho da requisição, valida o token e verifica se o usuário associado ao token tem permissão para acessar a rota solicitada. Se o token for válido, a requisição é permitida a prosseguir para a rota protegida, caso contrário, é retornada uma resposta de erro.

### Banco de Dados:

    Banco de Dados: MongoDB
    Descrição: É utilizado o banco de dados MongoDB, um banco de dados NoSQL orientado a documentos, para armazenar os dados de usuários e pokémons. O Mongoose, uma biblioteca Node.js, é utilizado como ODM (Object Data Modeling) para facilitar a interação com o MongoDB.

### Dependências:

    express: Biblioteca Node.js para criar APIs web.
    mongoose: Biblioteca Node.js para interagir com o MongoDB.
    cors: Middleware para habilitar o CORS (Cross-Origin Resource Sharing) em requisições HTTP.
    jsonwebtoken (jwt): Biblioteca Node.js para gerar e verificar tokens JWT para autenticação.
    nodemon: Biblioteca de desenvolvimento para reiniciar automaticamente o servidor durante o desenvolvimento.
    dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.

### Configuração:

    O programa utiliza a porta 4000 para iniciar o servidor Express.
    A conexão com o banco de dados MongoDB é feita através do arquivo './DB/db.js' utilizando o Mongoose.
    A autenticação JWT é implementada no middleware './middlewares/jwt.js' para proteger rotas que exigem autenticação.
    Os controladores para as rotas estão implementados nos arquivos './controller/User.js' e './controller/Poke.js',
    Variaveis de Ambiente precisam ser refeitas no .env

### POSTMAN

    Link do postman com as rotas prefeitas:
    https://restless-rocket-722930.postman.co/workspace/Team-Workspace~af464cc5-7a2d-4447-8387-5c2e6f7ead4c/collection/22658973-74a9f9f5-de80-4702-822d-864c14b2e76e?action=share&creator=22658973
