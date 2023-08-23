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
  

