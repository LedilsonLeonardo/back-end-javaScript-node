const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3000;

//CONFIGURAÇÃO DO HANDLEBARS
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

//Configuraçãoes das sessions
app.use(
  session({
    secret: "CriarUmaChaveQualquer1234! blablabla",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("index", { NavActiveCad: true });
});

app.get("/users", (req, res) => {
  Usuario.findAll().then((valores)=>{
console.log(valores.map(valores=> valores.toJSON()));
  }).cath((err)=>{
 console.log(`Houve um problema: ${err}`);
  })
  // res.render("users", { NavActiveUsers: true });
});

app.get("/editar", (req, res) => {
  res.render("editar");
});
app.post("/cad", (req, res) => {
  res.send(req.body.email);
  //valores vindo do formulario
  var nome = req.body.nome;
  var email = req.body.email;

  //array que vai conter os erros
  const erros = [];

  //remover os espaços em branco antes e depois

  nome = nome.trim();
  email = email.trim();

  //Limpar os nomes de caracteres especiais (apenas letras)
  nome = nome.replace(/[^A-zÀ-ù\s]/gi, "");
  nome = nome.trim();
  console.log(nome);
  //Verificar se está vazio o campo

  if (nome == "" || typeof nome == undefined || nome == null) {
    erros.push({ mensagem: "Campo nome não pode ser vazio" });
  }

  //Verificar se o campo nome é valido
  if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)) {
    erros.push({ mensagem: "Nome inválido!" });
  }
  //VAlidação do Email
  if (email == "" || typeof email == undefined || email == null) {
    erros.push({ mensagem: "Campo email não pode ser vazio" });
  }

  //Verificar se o email e valido
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    erros.push({ mensagem: "Campo email inválido" });
  }
  if (erros.length > 0) {
    console.log(erros);
    req.session.errors = erros;
    req.session.sucess = false;
    return res.redirect("/");
  }

  //Sucesso  nenhum erro
  //salvar no banco de dados

  Usuario.create({
    nome:nome,
    email:email.toLowerCase()
  }).then(function(){
    console.log('Cadastrado com suceso!');
    req.session.sucess = true;
    return res.redirect('/');
  }).cath( function(erro){
    console.log(`Ops, houver um erro: ${erro}`);
  }

  )

  console.log("validação realizada com sucesso");
  req.session.sucess = true;
  return res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:" + PORT);
});
