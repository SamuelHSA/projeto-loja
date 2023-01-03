const express = require('express');
const app = express();
const connectDataBase = require('./dataBase/conectarMongoDB')

app.get('/', function (req, res) {
    res.send('Hello Word')
});

connectDataBase()

app.listen(3000, function() {
    console.log('Servidor rodando!')
});