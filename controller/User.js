const User = require('../models/User')//importar o modelo de User
const mongoose = require('mongoose')//importar o mongoose
const jwt = require('jsonwebtoken');//importar o jwt
const bcrypt = require('bcrypt');//impotar o bcrypt
require('dotenv').config();







const {verifyHashPass} = require('../Services/authService')


const listUser = async(req,res)=>{
  const  {id} =  await req.params
  const data = await User.findOne({email})
  res.status(200).json(data)



} 






const editUser = async (req,res)=>{
const {id} = await req.params
const data = await User.findOne({_id:id})

const {email,username,password} = await req.body

if(!email || !username || !password){
  res.status(400).json({msg:'informe todos os campos'})
}

try{
  //hash de senha
  const hashtime = await parseInt(process.env.HASH_TIME) 
  const hash = await bcrypt.hashSync(password, hashtime);
  
  const result = await  User.updateOne({_id:id},{username,email,password:hash})
  res.json({msg:`usuario atualizado com sucesso ${result}`})

}catch(err){
  res.status(400).json({msg:'erro no banco'})
}

}



const login = async (req,res)=>{
    const { email, password } = req.body;

    try{
         // Lógica de autenticação do usuário, por exemplo, verificação do email e senha no banco de dados
        const user = await User.findOne({ email });

      // Verifique se a senha está correta
      const isEqual = await verifyHashPass(password,user.password)

      if(isEqual){
        //criar payload
        const payload = await {
          id:user._id,
        
        }
        const JWT_SECRET = process.env.JWT_SECRET;
        const token = jwt.sign(payload,  JWT_SECRET );
        
   

        res.status(200).json({token})




      }else{
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
    
    
    
    
    

    }catch(err){

    }

}

// Metodo de criação de usuario
const addUser = async (req, res) => {
    const { username, password, email } = await req.body;
  
    if (!username || !password) {
      return res
        .status(400)
        .send('Informe todos os campos por favor');
    }
  
    try {
        //procurar duplicidade no banco
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res
          .status(409)
          .send('O nome de usuário fornecido já está sendo utilizado');
      }
      //hash de senha
            const hashtime = await parseInt(process.env.HASH_TIME) // variavel do bcrypt para o hash
            const hash = await bcrypt.hashSync(password, hashtime);
            const newuser = new User({ email: email ,username: username, password: hash,createdAt:Date.now() });
      //salvando usuario no banco      
            const savedUser = await newuser.save()
            return res.status(200).json(savedUser);
      
    
  
     
      
  
  
    } catch (err) {
      console.error(err);
      return res.status(500).send('Erro interno do servidor');
    }
  };
  

  module.exports = { addUser ,login,editUser}; // Exportar os Metodos de controle