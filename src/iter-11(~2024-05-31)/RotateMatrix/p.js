/**
 * @param {number[][]} matrix
 */
function RotateMatrix(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const currList = [];
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      currList.push(matrix[j][i]);
    }
    res.push(currList);
  }

  return res;
}
console.log(
  RotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  RotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

/*
[1,2,3]       [7,4,1]
[4,5,6] --->  [8,5,2]
[7,8,9]       [9,6,3]
*/
