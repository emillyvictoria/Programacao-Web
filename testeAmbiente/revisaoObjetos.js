/*const array = [0,"um",2];
console.log(array[1]);

const meuObjeto = {
    nome: "Emilly",
    telefones: [61873733465, 61987542345],
    digaOlah: function (){
        console.log("Olah");
    }
}
console.log(meuObjeto);
console.log(meuObjeto.nome);
console.log(meuObjeto.telefones[1]);
meuObjeto.digaOlah()*/

let objeto = {
    p1: "um",
    p2: 2,
    p3: 3,
    pn: "pn"
}

for (const idx in objeto) {
    if(idx == "pn"){
    console.log(idx + " - " + objeto[idx]);        
    }

}
