/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const X = "X";
  const O = "O";
  const T = "T";
  const ROW_LEN = board.length;
  const COL_LEN = board[0].length;
  const DX = [-1, 0, 1, 0];
  const DY = [0, 1, 0, -1];

  function recursion(row, col) {
    if (row < 0 || col < 0 || row >= ROW_LEN || col >= COL_LEN || board[row][col] !== O) {
      return;
    }
    board[row][col] = T;

    for (let i = 0; i < 4; i++) {
      const nextRow = row + DX[i];
      const nextCol = col + DY[i];
      recursion(nextRow, nextCol);
    }
  }

  // 끝에꺼만
  for (let i = 0; i < ROW_LEN; i++) {
    for (let j = 0; j < COL_LEN; j++) {
      if (i === 0 || i === ROW_LEN - 1 || j === 0 || j === COL_LEN - 1) {
        console.log({ i, j });
        recursion(i, j);
      }
    }
  }

  for (let i = 0; i < ROW_LEN; i++) {
    for (let j = 0; j < COL_LEN; j++) {
      if (board[i][j] === O) {
        board[i][j] = X;
      }
      if (board[i][j] === T) {
        board[i][j] = O;
      }
    }
  }

  return board;
};

solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]);

/*
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
*/
