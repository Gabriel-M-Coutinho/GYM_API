const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;

const verifyHashPass = async (password, hash) => {
    try {
      const match = await bcrypt.compare(password, hash);
      return match;
    } catch (error) {
      console.error('Erro ao verificar hash de senha:', error);
      return false;
    }
  };




//virificação de jwt
const verifyjwt =  (token)=>{
  const tokenok = token.split(' ')[1]
  return jwt.verify(token, JWT_SECRET);
}

module.exports =  {verifyHashPass,verifyjwt};