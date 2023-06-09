const express = require ('express');
const app = express();

//Importa o roteamento

const carros = require ('./routes/carros');

//config
const PORT = process.env.PORT || 3000;


//GET, POST, DELETE
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/sobre',(req, res)=>{
    res.send('<h1>Página sobre</h1>');
})

//GET, POST, DELETE
app.use('/carros',carros);

//carros

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});