#Promise

Uma Promise é um objeto em JavaScript que representa a eventual conclusão ou falha de uma operação assíncrona. Ela permite lidar com código assíncrono de maneira mais legível e organizada, evitando o "callback hell". Uma Promise pode estar em um dos três estados: pendente, resolvida (com sucesso) ou rejeitada (com erro).

#Exemplos

// Exemplo de uma simulação de função assíncrona com Promise
function aguardarSegundos(segundos) {
  return new Promise((resolve, reject) => {
    if (segundos > 5) {
      reject("Tempo muito longo");
    } else {
      setTimeout(() => {
        resolve(`Aguardou por ${segundos} segundos`);
      }, segundos * 1000);
    }
  });
}

aguardarSegundos(3)
  .then(resultado => {
    console.log(resultado);  // Saída: Aguardou por 3 segundos
  })
  .catch(erro => {
    console.error(erro);
  });


Neste exemplo, a função aguardarSegundos retorna uma Promise que resolve após um determinado número de segundos. O método .then() é usado para lidar com o resultado bem-sucedido da Promise, enquanto o .catch() é usado para tratar erros que podem ocorrer durante o processamento assíncrono.