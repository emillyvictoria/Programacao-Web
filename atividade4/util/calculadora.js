function somar (a,b){
    return Number.parseInt (a)+ Number.parseInt(b);
}

function subtrair (a,b){
    return a-b;
}

function multiplicar (a,b){
    return a*b;
}

function dividir (a,b){
    return a/b;
}


//exportar as funções para serem usadas em outros arquivos (módulos)
module.exports = {
    somar, subtrair, multiplicar, dividir
}