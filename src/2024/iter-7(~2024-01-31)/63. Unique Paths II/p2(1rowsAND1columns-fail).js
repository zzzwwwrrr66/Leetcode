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

  const countTable = Array.from(Array(obstacleGrid.length), () =>
    Array(obstacleGrid[0].length).fill(0)
  );

  // 0 rows 0 columns is 1
  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] !== 1) {
      countTable[i][0] = 1;
    }
  }
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] !== 1) {
      countTable[0][i] = 1;
    }
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] !== 1) {
        countTable[i][j] = countTable[i - 1][j] + countTable[i][j - 1];
      }
    }
  }
  return countTable[countTable.length - 1][countTable[0].length - 1];
};
// uniquePathsWithObstacles([
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ]);

// uniquePathsWithObstacles([
//   [0, 1],
//   [0, 0],
// ]);
// uniquePathsWithObstacles([
//   [0, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
// ]);

// 중간에 막히므로 이방법은 실패
uniquePathsWithObstacles([
  [0, 0],
  [1, 1],
  [0, 0],
]);
