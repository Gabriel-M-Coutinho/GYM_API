const mongoose = require('mongoose')
const Pokes = require('../models/Pokes')// Importar o modelo de Poke
const Pokeurl = require('../models/Pokeurl')//Importar o modelo de PokeUrl




const editpoke = async(req,res)=>{
  const {id} = req.body
  const {name,type1,type2} = req.body

  const numid = parseInt(id)
  try{
    let updatedata =  {}

    if(name){
      data.name =await name
    }
    if(type1){
      data.type1 =await type1
    }
    if(type2){
      data.type2 = await type2
    }

    let updated = Pokes.updateOne({id:numid},updatedata)
    res.status(200).json(updated)
  }catch(err){
    res.status(500).sta
  }
}

const deletepoke = async(req,res)=>{

  const {id} = req.params
  const numid = parseInt(id) 
  try{
    const session = await mongoose.startSession();
    session.startTransaction();


    await Pokeurl.findOneAndDelete({ id: numid });
    await Pokes.findOneAndRemove({ id: numid });
    
   

    // Confirmar a transação
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({msg:'transação feita com sucesso'})

    
  }catch(err){
    res.status(500).json({msg:'erro na transação'})
  }


}

const geturlpoke = async(req,res)=>{
  const {id} = req.params
  const numid = parseInt(id)
  if(!id){
    res.status(404).json({msg:'id não informado'})
  }
  try{
    const data = await Pokeurl.findOne({id:numid})
    res.status(200).json(data)
  }
  catch(err){
    res.status(500).json({msg:'erro no servidor'})
  }

}



const pokeget = async(req,res)=>{
  const {id} = req.params
  const numid = parseInt(id)
  if(!id){
    res.status(404).json({msg:'id não informado'})
  }
  try{
    const data = await Pokes.findOne({id:numid})
    res.status(200).json(data)
  }
  catch(err){
    res.status(500).json({msg:'erro no servidor'})
  }


}


const addpoke =  async (req,res)=>{
  const {name,id,type1,type2}  = req.body 

  if (!name || !id|| !type1) {
    return res
      .status(400)
      .send('Informe todos os campos por favor');
  }
  try{
    const existingPokemon = await Pokes.findOne({ id: id });
    if (existingPokemon) {
      return res
        .status(409)
        .send('O nome de usuário fornecido já está sendo utilizado');
    }

    // Iniciar a transação
    const session = await mongoose.startSession();
    session.startTransaction();

    const newpoke = new Pokes({id , name, types:[type1,type2] });
    await newpoke.save();


    const newpokeurl = new Pokeurl({url:`http://localhost:4000/poke/${id}`,id})
    await newpokeurl.save();
  
    // Confirmar a transação
    await session.commitTransaction();
    session.endSession();
    
    res.status(200).json({msg:'Transação bem sucessedida'})

  }catch(err){
    await session.abortTransaction();
    session.endSession();
  
    res.status(500).json({msg:'Erro na transação'})
  }
  





}


const getPokes = async (req, res) => {

    try {
        const pokes = await Pokeurl.find({}).exec(); // Usar exec() para executar a consulta
        if(!pokes){
          return res.status(404).json({error:'Não existem pokemons no sistema por favor cadastre um para poder lista-los'})
        }else{
          res.status(200).json(pokes); // Retornar as fichas encontradas como resposta JSON
        }
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao buscar Pokemon' }); // Tratar erro de busca de fichas
      }
};



module.exports = {getPokes,addpoke,pokeget,geturlpoke,deletepoke,editpoke}