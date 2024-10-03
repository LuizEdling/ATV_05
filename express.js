const express = require('express');
const fs = require('fs');
const app = express();
app.get('/', function (req, res) {
    res.end('Página Inicial');
});

app.get('/api/data', function (req, res) {
    data = [];
    data = read(data[0], "bd.json");
    res.end(`Nome: ${data[0].nome} / Idade: ${data[0].idade} / Telefone: ${data[0].telefone}`)
});

function read(array, file){
    return array = JSON.parse(fs.readFileSync(file));
}

app.listen(3000, function () {
    console.log("App de Exemplo escutando na porta 3000!");
  });