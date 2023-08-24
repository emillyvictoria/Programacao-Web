function matrixMultiplication(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      return "Não é possível calcular";
    }
  
    const resultMatrix = [];
  
    for (let i = 0; i < rowsA; i++) {
      const row = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        row.push(sum);
      }
      resultMatrix.push(row);
    }
  
    return resultMatrix;
  }
  
  const matrixA = [
    [2, 3],
    [4, 5],
  ];
  
  const matrixB = [
    [1, 2],
    [3, 6],
  ];
  
  const matrixC = matrixMultiplication(matrixA, matrixB);
  
  if (typeof matrixC === "string") {
    console.log(matrixC);
  } else {
    console.log("Matriz resultante C:", matrixC);
  }
  
