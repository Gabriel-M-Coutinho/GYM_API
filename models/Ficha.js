const mongoose = require('mongoose');

const fichaSchema = new mongoose.Schema({
    exercicio:String,
    serie:Number,
    repeticao:Number
  })


const treinoSchema = new mongoose.Schema({
    treino:[fichaSchema]
})


// Criar e exportar o modelo "Ficha"
module.exports = mongoose.model('Ficha', treinoSchema);