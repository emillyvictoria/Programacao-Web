#Função Arrow

Uma função Arrow é uma forma concisa de definir uma função em JavaScript. Ela permite escrever funções de uma maneira mais compacta e é especialmente útil para funções simples que consistem em apenas uma expressão. As funções Arrow têm um comportamento de escopo *léxico*, o que significa que elas herdam o valor do this do contexto em que estão inseridas.

#Exemplos

// *Função tradicional*
function soma(a, b) {
  return a + b;
}

// *Função Arrow equivalente*
const somaArrow = (a, b) => a + b;

console.log(soma(2, 3));       // Saída: 5
console.log(somaArrow(2, 3));  // Saída: 5
