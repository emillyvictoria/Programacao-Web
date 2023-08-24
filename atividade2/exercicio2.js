// Função para imprimir uma matriz
function printMatrix(matrix) {
    for (let row of matrix) {
      console.log(row.join("\t"));
    }
  }
  
  // Função para calcular a matriz transposta
  function transposeMatrix(matrix) {
    const transposedMatrix = [];
    for (let j = 0; j < matrix[0].length; j++) {
      const transposedRow = [];

      for (let i = 0; i < matrix.length; i++) {
        transposedRow.push(matrix[i][j]);
      }
      
      transposedMatrix.push(transposedRow);
    }
    
    return transposedMatrix; 
  }
  

  const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  console.log("Matriz A:");
  printMatrix(matrixA);
  
  const transposedA = transposeMatrix(matrixA);
  console.log("\nTransposta de Matriz A:");
  printMatrix(transposedA);
  

/*  let a = [[1,2],
           [3,4],
           [5,6]];

function mudaPosicao (a) {
  b = [
    [a[0][0], a[1][0], a[2][0]],
    [a[0][1], a[1][1], a[2][1]],    
  ]
  return b;
}

function mudaPosicao2 (matriz) {
  let qtdL = matriz.lenght;
  let qtdC = matriz [0].lenght;
  let b = Array (qtdC);
  for (let i = 0; i < 2; i++){
    b[i] = Array(qtdC);
  }

  for (let i = 0; i < qtdL; i++) {
    for (let j = 0; j < qtdC; j++) {
        b[j][i] = matriz [i][j];
    }
  }
  return b;
}

b = mudaPosicao2 (a);

console.log("Matriz resultante C:", matriz)*/