const fs = require("fs");
const http = require('http');
const path = require('path');
const utils = require('./utils');

const requestListener = function (req, res) {
    if (req.url === "/") {
    res.writeHead(200);
    res.end("Bem vindo!");
    
    } else if (req.url === "/sobre") {
        res.writeHead(200);
        res.end('Meu nome é Luiz Henrique e estou usando NODE');   
    } else if(req.url === "/contato"){
        res.writeHead(200);
        res.end('email: luizedling.h@gmail.com / número:42988007444');   
    } else if(req.url === '/numero'){
        res.writeHead(200);
        const number = utils();
        res.end(number.toString());   
    } else if(req.url.startsWith("/saudacao/")){
        const nome = req.url.split("/saudacao/");
        res.end(`Olá, ${nome[1]}`);   
    } else {
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => { 
    console.log("Servidor está rodando em http://localhost:8000");
});