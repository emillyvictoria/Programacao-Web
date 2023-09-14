const express = require ('express');
const estoque = require ('./estoque/estoque.js');
const app = express();

app.get ("/api/estoque/cadastrar/:id/:nome/:qtd", function (req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.cadastrarProduto(p);
    res.json(p);
});

app.get ("/api/estoque/listar", function (req, res){
    res.json(estoque.listarProduto());
});

app.get ("/api/estoque/editar/:id/:qtd", function (req, res){
    let id = req.params.id;
    let qtd = req.params.qtd;
    res.json(estoque.editarProduto(id, qtd));

});

app.get ("/api/estoque/remover/:id", function (req, res){
    let id = req.params.id;
    estoque.removerProduto(id);
    res.json(estoque.listarProduto());
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log("rodando na porta "+ PORT);
});