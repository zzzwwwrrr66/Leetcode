// way TIME LIMIT
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // base case
  if (obstacleGrid[0][0] === 1) return 0;
  const visited = Array.from(Array(obstacleGrid.length), () =>
    Array(obstacleGrid[0].length).fill(0)
  );

  const dx = [1, 0];
  const dy = [0, 1];
  let count = 0;
  const DFS = (x, y) => {
    if (visited[x][y] === 1) {
      return;
    }
    // goal
    if (
      obstacleGrid[x][y] !== 1 &&
      x === obstacleGrid.length - 1 &&
      y === obstacleGrid[0].length - 1
    ) {
      count++;
      visited[x][y] = 0;
      return;
    }

    visited[x][y] = 1;

    for (let i = 0; i < 2; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (
        nx < obstacleGrid.length &&
        ny < obstacleGrid[0].length &&
        obstacleGrid[nx][ny] !== 1
      ) {
        DFS(nx, ny);
        visited[x][y] = 0;
      }
    }
  };

  DFS(0, 0);
  return count;
};
// bottom right 에 도달할수있는 경우의수
// goal is bottom right
// bottom or right
// 1 is obstacle
// visited backtracking?

/**
[
[0,0,0],
[0,1,0],
[0,0,0]]
*/

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);

uniquePathsWithObstacles([
  [0, 1],
  [0, 0],
]);
uniquePathsWithObstacles([
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]);
