const express = require('express');
const app = express();
const connectDataBase = require('./dataBase/conectarMongoDB')

const userRoute = require('./routes/UserRoute');

const port = 3000;

connectDataBase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => 
    console.log('Servidor rodando!')
);