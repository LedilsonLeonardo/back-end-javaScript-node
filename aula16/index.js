const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = process.env.PORT || 3000;

//CONFIGURAÇÃO DO HANDLEBARS
app.engine('hbs',hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
})); app.set('view engine','hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//IMPORTAR MODEL USUARIOS
const Usuario = require('./models/Usuario');

//CONFIGURAÇÃO DAS SESSIONS
app.use(session({
    secret: 'CriarUmaChaveQualquer1324!blablaba',
    resave: false,
    saveUninitialized: true
}))

app.get('/',(req,res)=>{
    if(req.session.errors){
        var arrayErros = req.session.errors;
        req.session.errors = "";
        return res.render('index',{NavActiveCad:true, error:arrayErros})
    }

    if(req.session.success){   
        req.session.success = false;    
        return res.render('index',{NavActiveCad:true, MsgSuccess:true})
    }

    res.render('index',{NavActiveCad:true});
})

app.get('/users',(req,res)=>{
    res.render('users',{NavActiveUsers:true});
})

app.get('/editar',(req,res)=>{
    res.render('editar');
})

app.post('/cad',(req,res)=>{
   //VALORES VINDOS DO FORMULARIO
   var nome = req.body.nome;
   var email = req.body.email;

   //ARRAY QUE VAI CONTER OS ERROS
   const erros = [];

   //REMOVER OS ESPAÇOS EM BRANCO ANTES E DEPOIS
   nome = nome.trim();
   email = email.trim();

   //LIMPAR O NOME DE CARACTERES ESPECIAIS (APENAS LETRAS)
   nome = nome.replace(/[^A-zÀ-ú\s]/gi,''); 
   nome = nome.trim();
   //console.log(nome);

   //VERIFICAR SE ESTÁ VAZIO OU NÃO CAMPO
   if (nome =='' || typeof nome == undefined || nome == null){
    erros.push({mensagem: "Campo nome não pode ser vazio!"});
   }

   //VERIFICAR SE O CAMPO NOME É VÁLIDO (APENAS LETRAS)
   if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)){
    erros.push({mensagem:"Nome inválido!"});
   }

   //VERIFICAR SE ESTÁ VAZIO OU NÃO CAMPO
   if (email =='' || typeof email == undefined || email == null){
    erros.push({mensagem: "Campo email não pode ser vazio!"});
   }

   //VERIFICAR SE EMAIL É VALIDO
   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    erros.push({mensagem:"Campo email inválido!"});
    }

    if(erros.length > 0){
        console.log(erros);        
        req.session.errors = erros;
        req.session.success = false;
        return res.redirect('/');
    }

    //SUCESSO NENHUM ERRO
    //SALVAR NO BANCO DE DADOS
    console.log('Validação realizada com sucesso!');
    req.session.success = true;
    return res.redirect('/');


})

app.listen(PORT,()=>{
    console.log('Servidor rodando em http://localhost:'+PORT);
})