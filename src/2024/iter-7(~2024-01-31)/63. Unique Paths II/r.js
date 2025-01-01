/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // error case
  if (
    !obstacleGrid.length ||
    !obstacleGrid[0].length ||
    obstacleGrid[0][0] === 1
  ) {
    return 0;
  }

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let previous = new Array(n).fill(0);
  let current = new Array(n).fill(0);
  previous[0] = 1;

  for (let i = 0; i < m; i++) {
    current[0] = obstacleGrid[i][0] === 1 ? 0 : previous[0];
    for (let j = 1; j < n; j++) {
      current[j] = obstacleGrid[i][j] === 1 ? 0 : current[j - 1] + previous[j];
    }
    previous = [...current];
  }
  console.log(previous[n - 1]);
  return previous[n - 1];
};
/**
 [1,1,1]
 [1,2,3]
 [1,0,3]
 */

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
]);
