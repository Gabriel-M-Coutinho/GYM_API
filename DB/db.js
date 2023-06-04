const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/GYM_DB'

const connectDB = async () => {
  try {
    await mongoose.connect(uri , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão realizada com sucesso');
  } catch (error) {
    console.log('Erro na conexão:', error);
  }
};

module.exports = connectDB;

