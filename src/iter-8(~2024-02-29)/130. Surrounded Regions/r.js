// 테두리의 O 일때는 바꾸면 안된다
// 나머지것들은 "X"로 바꿈

var solve = function (board) {
  if (board.length == 0) return null;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (
        board[i][j] == "O" &&
        (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  // 바꾸면 안되는것 = W
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] == "W") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

function dfs(board, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] == "X" ||
    board[i][j] == "W"
  ) {
    return;
  }
  board[i][j] = "W";
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
  return;
}

solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]);
