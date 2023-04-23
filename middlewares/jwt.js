const jwt = require('jsonwebtoken');
require('dotenv').config();


// Função de middleware 
const ProtectRoute = async (req, res, next) => {
  try {
    // Obter o token do cabeçalho de autorização da requisição
    const token = req.header('Authorization');

    // Verificar se o token está presente
    if (!token) {
      return res.status(401).json({ mensagem: 'Token de autorização não fornecido' });
    }
    


    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const tokenok = await token.split(' ')[1]        
        const decoded = await jwt.verify(tokenok, JWT_SECRET,{
            expiresIn: '24h' 

             });
        req.user= decoded;
  
      } catch (err) {
        console.error('Erro na decodificação do JWT:', err);
        return res.status(401).json({ mensagem: 'Token inválido' });
      }

  

    // Chamar o próximo middleware ou rota
    next();
  } catch (err) {
   
    return res.status(401).json({ mensagem: 'token invalido'});
  }
};





module.exports = {ProtectRoute};