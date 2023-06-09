//MÓDULO DE WEB SERVER -  HTTP

const { create } = require("domain");
const http = require("http");

// host local
const hostname = "192.168.2.100";
const PORT = process.eventNames.PORT || 3000;

const server = http.createServer(
      (req, res)=>{

    let url = req.url;
  if (url === "/") {
    //console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.end("<h1> Página</h1>");
  }
  if (url === "/sobre") {
    //console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.end("<h1> Página Sobre</h1>");
  }
  if (url === "/teste") {
    //console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.end("<h1> Página teste </h1>");
  }
});

server.listen(PORT, hostname, function () {
console.log(`Servidor rodando em http://${hostname}:${PORT}`);
});
