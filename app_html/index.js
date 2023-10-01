const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: false }));

app.get('/', function(req, res) {

    res.render('index.html');
});

app.post('/dados', function(req, res) {
    //renderizar as informações do formulário
    const {nome, endereco, telefone, data} = req.body;
    res.render('dados.html', { nome, endereco, telefone, data });
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});