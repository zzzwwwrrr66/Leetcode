/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const initMatrix = matrix.map((v) => [...v]);

  for (let i = 0; i < n; i++) {
    let k = 0;
    for (let j = n - 1; j >= 0; j--) {
      matrix[i][k] = initMatrix[j][i];
      k++;
    }
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// console.log([
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ]);
