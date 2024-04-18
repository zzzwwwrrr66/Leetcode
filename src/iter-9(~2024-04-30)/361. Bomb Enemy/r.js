var maxKilledEnemies = function (grid) {
  const bfs = (row, col) => {
    const checkValid = (x, y) => x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
    let num = 0;
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]; // down, up, right, left
    for (const [rowDir, colDir] of directions) {
      let newRow = row,
        newCol = col;
      while (checkValid(newRow, newCol) && grid[newRow][newCol] !== "W") {
        if (grid[newRow][newCol] === "E") num++;
        newRow = newRow + rowDir;
        newCol = newCol + colDir;
      }
    }
    return num;
  };
  let res = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "0") {
        res = Math.max(bfs(row, col), res);
      }
    }
  }
  return res;
};

maxKilledEnemies([
  ["0", "E", "0", "0"],
  ["E", "0", "W", "E"],
  ["0", "E", "0", "0"],
]);
