/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // only move down or right
  // 거꾸로 생각해서 left or up 으로 계산하기
  const m = grid.length;
  const n = grid[0].length;

  // prevRow
  // currRow
};

/**
 * Output: 7
  Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 */
// console.log(
//   minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
//   ])
// );

console.log(
  minPathSum([
    [1, 2],
    [5, 6],
    [1, 1],
  ])
);
