/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // config
  const EMPTY = 0;
  const FRESH = 1;
  const ROTTEN = 2;
  const DX = [-1, 0, 1, 0];
  const DY = [0, 1, 0, -1];
  const ROW = grid.length;
  const COL = grid[0].length;
  // tmp val
  const cntMap = Array.from(Array(ROW), () => Array(COL).fill(Infinity));
  let freshOrangeCnt = 0;

  function dfs(row, col, time) {
    if (row < 0 || col < 0 || row >= ROW || col >= COL) {
      return;
    }
    if (grid[row][col] === ROTTEN || grid[row][col] === EMPTY) {
      return;
    }
    cntMap[row][col] = Math.min(cntMap[row][col], time);
    grid[row][col] = ROTTEN;

    for (let i = 0; i < 4; i++) {
      const nextRow = DX[i] + row;
      const nextCol = DY[i] + col;
      dfs(nextRow, nextCol, time + 1);
    }
    grid[row][col] = FRESH;
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === FRESH) {
        freshOrangeCnt = freshOrangeCnt + 1;
      }
      if (grid[i][j] === ROTTEN) {
        for (let k = 0; k < 4; k++) {
          const nextRow = DX[k] + i;
          const nextCol = DY[k] + j;
          dfs(nextRow, nextCol, 1);
        }
      }
    }
  }
  // result return case
  if (freshOrangeCnt === 0) {
    return 0;
  }

  let result = -Infinity;
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === FRESH && cntMap[i][j] === Infinity) {
        return -1;
      }

      if (cntMap[i][j] === Infinity) {
        continue;
      }
      result = Math.max(cntMap[i][j], result);
    }
  }

  return result;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
  orangesRotting([[0, 2]]),
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ])
);
