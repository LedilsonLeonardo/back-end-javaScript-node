//MIDDLEWRES - INTERMEDIARIO - INTECEPTADOR - MEIO
// TELEFONE SEM FIO

// PRIMEIRO-> PROXIMA-> PROXIMA-> RESPOSTA
//https://expressjs.com/pt-br/guide/using-middleware.html

//Get, POST, DELETE, PUT
const express = require ('express');
const app = express();

const PORT = process.env.PORT || 3000;
//MIDDLEWRES - INTERMEDIARIO - INTECEPTADOR - MEIO

const usuarioLogado = true;

app.use('/restrita',(req, res, next)=>{
  if(!usuarioLogado){
    res.redirect('/');
  }
  next();
})
app.get("/", (req, res) => {
  res.send ('Página Inicial');
});

app.get('/restrita',(req, res)=>{

  res.send('<h1> Rota restrita</h1>');
});

app.get('/restrita/usuario',(req, res)=>{

  res.send('<h1> Listar Usuários</h1>');
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
