/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const [ISLAND, SEA] = ["1", "0"];

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= rowLen || col >= colLen) {
      return 0;
    }
    if (grid[row][col] === SEA) {
      return 0;
    }

    grid[row][col] = SEA;

    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
    dfs(row, col - 1);
  }

  let result = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === ISLAND) {
        result += 1;
        dfs(i, j, 0);
      }
    }
  }

  return result;
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);
