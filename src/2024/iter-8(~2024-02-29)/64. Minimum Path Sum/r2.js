// TODO: 왼쪽 위로 하면 플러스해나갈수 있을듯?

var minPathSum = function (grid) {
  // 오른쪽 아래애서 부터 시작
  let previousRow = Array(grid[0].length).fill(Infinity);
  previousRow[previousRow.length - 1] = 0; // [Infinity, 0]
  for (let row = grid.length - 1; row >= 0; row--) {
    const currentRow = Array(grid[0].length).fill(0);

    for (let col = grid[0].length - 1; col >= 0; col--) {
      const bottomCell = previousRow[col];
      const rightCell = currentRow[col + 1] ?? Infinity;

      currentRow[col] = Math.min(bottomCell, rightCell) + grid[row][col];
    }
    previousRow = currentRow;
  }

  return previousRow[0];
};

console.log(
  minPathSum([
    [1, 2],
    [5, 6],
    [1, 1],
  ])
);
