// //Módulo de arquivos do sistema file system

const fs = require("fs");

// /**manipulação de pastas **/

// //fs.existsSync()- Verfica se caminho existe
// //fs.mkdirSync() - criar uma pasta
// //fs.renameSync() - Renomear uma pasta
// //fs.rmdir( ) - Deletar uma pasta

// if (!fs.existsSync("./public")) {
//   fs.mkdirSync("./public", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Pasta criada com sucesso!");
//   });
// } else {
//   console.log('A pasta "public" já existe!');
// }

// if (fs.existsSync("./public")) {
//   fs.renameSync("./public", "./dimitri", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Pasta renomeada com sucesso!");
//   });
// }else{
//      console.log('Impossivel renomear por que "public" não existe!');
// }

// fs.existsSync('./public') || fs.mkdirSync('./public');

if (fs.existsSync("./dimitri")) {
    fs.rmdir('./dimitri',{recursive:true}, (err) => {
      if (err) {
        throw err;
      }
      console.log("Pasta deletada com sucesso!");
    });
  }else{
       console.log('Impossivel deletar  dimitri por que "pasta" não existe!');
  }
  
