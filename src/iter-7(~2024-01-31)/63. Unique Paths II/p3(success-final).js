/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (
    !obstacleGrid.length ||
    !obstacleGrid[0].length ||
    obstacleGrid[0][0] === 1
  ) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let current = Array(n).fill(0);
  let prev = Array(n).fill(0);
  prev[0] = 1;

  for (let i = 0; i < m; i++) {
    // 첫번째 요소 값 정하기
    current[0] = obstacleGrid[i][0] === 1 ? 0 : prev[0];
    for (let j = 1; j < n; j++) {
      // current[j] = 왼쪽 + 위
      current[j] = obstacleGrid[i][j] === 1 ? 0 : current[j - 1] + prev[j];
    }
    prev = [...current];
  }

  return current[n - 1];
};
uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);

// uniquePathsWithObstacles([
//   [0, 1],
//   [0, 0],
// ]);
uniquePathsWithObstacles([
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]);
uniquePathsWithObstacles([
  [0, 0],
  [1, 1],
  [0, 0],
]);
