const calc = require('./util/calculadora');

const express = require('express');

const app = express();

//definindo uma rota para a aplicação
//:a e :b são parâmetros da rota
app.get("/somar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a,b)}`);
})


const port = 8080;

app.listen(port, function () {
    console.log('App rodando na porta ' + port);
});