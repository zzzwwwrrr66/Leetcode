/**
 * @param {number[][]} matrix
 * 기존의 matrix 를 변경해야함->새로운 matrix return 금지 
 * 행과열을 뒤집는다 -> reverse 한다 
 * j <  i 일때 m[j][i] = m[i][j]
 */
function RotateMatrix(matrix) {
  const default = matrix.map(v=>v.map(v=>v))
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const currList = [];
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      currList.push(matrix[j][i]);
      // matrix[i][j] = default[j][i]
    }
    // matrix[i].reverse()
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
