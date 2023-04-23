const mongoose = require('mongoose');

const PokeSchema = new mongoose.Schema({
  id: Number,
  url:String
})





// Criar e exportar o modelo "Ficha"
module.exports = mongoose.model('Pokeurl', PokeSchema);