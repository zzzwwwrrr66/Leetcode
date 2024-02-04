/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // only move down or right
  // 거꾸로 생각해서 left or up 으로 계산하기
  const m = grid.length;
  const n = grid[0].length;

  const direction = [
    [-1, 0],
    [0, -1],
  ];
  // 2 loop or def
  grid.forEach((currPosList, i) => {
    currPosList.forEach((currPos, j) => {
      let minPos = Infinity;
      direction.forEach((dir) => {
        const nextI = i + dir[0];
        const nextJ = j + dir[1];
        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
          minPos = Math.min(minPos, currPos + grid[nextI][nextJ]);
        }
      });

      grid[i][j] = minPos !== Infinity ? minPos : grid[i][j];
    });
  });

  return grid[m - 1][n - 1];
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
