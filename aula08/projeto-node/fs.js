//MÓDULO DE ARQUIVOS DO SISTEMA FILE SYSTEM
const fs = require('fs');

/*** MANIPULAÇÃO DE PASTAS ***/

//fs.existsSync() - Verificar se caminho existe
//fs.mkdirSync() - Criar uma pasta
//fs.renameSync() - Renomear uma pasta
//fs.rmdir() - Deletar uma pasta

// if(!fs.existsSync('./public')){
//     fs.mkdirSync('./public',(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('Pasta criada com sucesso!');
//     });
// }else{
//     console.log('A pasta "public" já existe!');
// }

// if(fs.existsSync('./public')){
//     fs.renameSync('./public','./dimitri',(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('Pasta renomeada com sucesso!');
//     });
// }else{
//     console.log('Impossível renomear por que "public" não existe!');
// }

// if(fs.existsSync('./dimitri')){
//     fs.rmdir('./dimitri',{recursive:true},(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('Pasta deletada com sucesso!');
//     });
// }else{
//     console.log('Impossível deletar dimitri por que "pasta não existe!!'); 
// }

//fs.existsSync('./public') || fs.mkdirSync('./public');


/*** CRIAR ARQUIVOS / ATUALIZAR ***/

// fs.writeFile() - substui o arquivo e o conteudo caso exista, se não existir ele cria um novo arquivo com o conteúdo que você passar.

// if(!fs.existsSync('./public/teste.txt')){
// fs.writeFile('./public/teste.txt','teste de conteúdo!',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Arquivo Criado com Sucesso!!');
// })
// }

// fs.appendFile() - adiciona conteudo num arquivo, se o arquivo não existir ele cria.

// fs.appendFile('outroarquivo.txt','\n\nAdicionado conteúdo!',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Arquivo atualizado!');
// })

// fs.open() - abre um arquivo para leitura, se o arquivo não existir ele cria vazio. Para criar um arquivo usar a flag "w" para writing escrita.

// fs.open('arquivo.txt','w',(err, file)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Salvo');
// })


/*** LER ARQUIVOS ***/
//fs.readFile()

/*** RENOMEAR / EXCLUIR ***/

//fs.rename() - Renomear arquivo
// fs.rename('arquivo.txt','dimitri.txt',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Arquivo renomeado!!');
// })

//fs.unlink() - Excluir arquivo
// fs.unlink('dimitri.txt',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Arquivo deletado com sucesso!');
// })
