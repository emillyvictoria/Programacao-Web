function somar (a,b =3) {
        return a+b;

}

function contarAteN(n){
    if (n > 0){
        console.log(n);
        contarAteN(n-1);
    }
}
contarAteN(5);