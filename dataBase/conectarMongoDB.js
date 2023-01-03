const mongoose = require('mongoose');

const connectDataBase = () => {
    console.log("Aguarde a conexão com o banco de dados")

    mongoose.connect("mongodb+srv://Samuel:projetoLoja@projetodaloja.rmmipyl.mongodb.net/?retryWrites=true&w=majority",
    // { userNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB conectado"))
    .catch((error) => console.log(error));
}

module.exports = connectDataBase;