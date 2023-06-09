const fs = require("fs");

// criando arquivo
// if (fs.existsSync("./public")) {
//   fs.writeFile('./public/texte.txt', "teste de conteudo!", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Arquivo Criando com Sucesso");
//   });
// }

//Adiciona o conteudo se ele já existe

// fs.appendFile('outroarquivoteste.txt','\n\nAdicionado conteúdo! ',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Arquivo atualizado!');
// })


// fs.open('arquivo.text','W',(err,file)=>{
//      if(err){
//         throw err;
//      }
//      console.log('salvo');
// })

// fs.rename ('arquivo.txt','dimitri.txt',(err)=>{
//     if (err){
//         throw err;
//     }
//     console.log('Arquivo renomeado');
// })

// fs.unlink() - Excluir arquivo

// fs.unlink('dimitri.txt',(err)=>{
//     if (err){
//         throw err;
//     }
//     console.log ('arquivo deletado')
// })