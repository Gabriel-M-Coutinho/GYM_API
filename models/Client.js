const mongoose = require('mongoose');

const fichaSchema = new mongoose.Schema({
  exercicio:String,
  serie:Number,
  repeticao:Number
})


const clientSchema = new mongoose.Schema({
  name: String,
  age:Number,
  weight:Number,
  objetivo:String,
  paid:{type:Boolean,
  default:false},
  treinos:[fichaSchema]
  
})








// Criar e exportar o modelo "Ficha"
module.exports = mongoose.model('Client', clientSchema);