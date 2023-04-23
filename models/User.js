const mongoose = require('mongoose');



// Definir o esquema para o modelo "User"
const userSchema = new mongoose.Schema({
  email:{type:String,
  required:true},
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },paid:{
    type:Boolean,
    default:false}
});










// Criar e exportar o modelo "User"
module.exports = mongoose.model('User', userSchema);