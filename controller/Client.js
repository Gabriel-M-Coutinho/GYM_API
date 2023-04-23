const mongoose = require('mongoose')
const Client = require('../models/Client')


/* Clientes */
const addclient = async(req,res)=>{
    const {name,age,weight,objetivo} = await  req.body

    if (!name || !age|| !weight || !objetivo) {
        return res
          .status(400)
          .send('Informe todos os campos por favor');
      }

    try{
        const existingClient = await Client.findOne({ name:name});
        if (existingClient) {
          return res
            .status(409)
            .send('O nome fornecido já está sendo utilizado');
        }
    
        // Iniciar a transação
        const session = await mongoose.startSession();
        session.startTransaction();
        
        const newclient = new Client({ name,age,weight,objetivo });
        await newclient.save()
          
        // Confirmar a transação
        await session.commitTransaction();
        session.endSession();
        res.status(200).json({msg:'cliente salvo com sucesso'})
   
    }catch(err){
        if (session) {
          await session.abortTransaction();
          session.endSession();
        }
        res.status(500).json({msg:'Erro na transação'})
    }
}


const delclient = async(req,res)=>{
    const {id} = req.params
    try{
        await Client.findOneAndDelete({_id:id})
        res.status(200).json({msg:'transação realizada com sucesso'})
    }catch{
        res.status(500).json({msg:'erro no servidor'})
    }


}

const getfichas = async(req,res)=>{
    try {
        const unpaidClients = await Client.find({ paid: false }); // Passar o critério de busca como um objeto { paid: false }
        res.status(200).json(unpaidClients);
      } catch (err) {
        res.status(500).json({ msg: 'Erro na busca de clientes não pagos' });
      }
}


/*FICHAS */
const createTemplate= async(req,res)=>{

}

const getFicha = async (req,res)=>{
    const { id } = req.params;
    try {
      const ficha = await Client.findOne({_id:id}).exec();
      if (ficha) {
        res.status(200).json( ficha );
      } else {
        res.status(404).json({ erro: 'Ficha não encontrada' }); // Adicionar tratamento para quando a ficha não for encontrada
      }
    } catch (err) {
        console.log(err)
      res.status(500).json({ erro: 'Erro interno do servidor' }); // Adicionar tratamento para outros erros
    }
}

const addficha = async(req,res)=>{
    const ficha = req.body
    const {id} = req.params


    if (!ficha){
      res.status(400).json({msg:'por favor não deixe nenhum campo vazio.'})
    }
       try{
           await Client.updateOne({_id:id},{treinos:ficha})
           res.status(200).json({msg:'ficha adicionada com sucesso'})
       }catch(err){
           res.status(500).json({msg:'erro no servidoar'})
       }
   }



module.exports = {addclient,addficha,createTemplate,delclient,getfichas,getFicha}