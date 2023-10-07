function isMatrixMagical(matrix) {
  // Get the number of rows and columns
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Calculate the sum of the first row to use as a reference
  const referenceSum = matrix[0].reduce((acc, value) => acc + value, 0);

  // Check row sums
  for (let i = 1; i < numRows; i++) {
    const rowSum = matrix[i].reduce((acc, value) => acc + value, 0);
    if (rowSum !== referenceSum) {
      return false;
    }
  }

  // Check column sums
  for (let j = 0; j < numCols; j++) {
    let colSum = 0;
    for (let i = 0; i < numRows; i++) {
      colSum += matrix[i][j];
    }
    if (colSum !== referenceSum) {
      return false;
    }
  }

  return true;
}

// Test the function with the given example
const exampleMatrix = [
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]
];

const isMagical = isMatrixMagical(exampleMatrix);
console.log(isMagical); // Output: true
