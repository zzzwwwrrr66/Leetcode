/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const [ISLAND, SEA] = [1, 0];

  function dfs(row, col, depth) {
    if (row < 0 || col < 0 || row >= rowLen || col >= colLen) {
      return 0;
    }
    if (grid[row][col] === SEA) {
      return 0;
    }

    grid[row][col] = SEA;

    return (
      1 +
      dfs(row - 1, col, depth + 1) +
      dfs(row, col + 1, depth + 1) +
      dfs(row + 1, col, depth + 1) +
      dfs(row, col - 1, depth + 1)
    );
  }

  let result = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === ISLAND) {
        const area = dfs(i, j, 0, -Infinity);
        result = Math.max(area, result, 0);
      }
    }
  }

  return result;
};

maxAreaOfIsland([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
]);

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
