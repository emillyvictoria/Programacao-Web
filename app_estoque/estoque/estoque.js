let produtos = Array();

function criarProduto (id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function cadastrarProduto (p){
    produtos.push(p);
}

function listarProduto (){
    return produtos;
}

function editarProduto (id, qtdAtual){
    produtos.forEach (p => {
        if (p.id == id){
            p.qtd = qtdAtual;
            pRetorno = p;
        }
    });
    return pRetorno;
}

function removerProduto (id){
    produtos.forEach (p => {
        if (p.id == id){
            produtos.splice(p, 1);
        }
    });
}

module.exports = {
    criarProduto,
    cadastrarProduto,
    listarProduto,
    editarProduto,
    removerProduto
}