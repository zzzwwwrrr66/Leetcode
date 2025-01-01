// 테두리의 O 일때는 바꾸면 안된다
// 나머지것들은 "X"로 바꿈

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const currentNode = board[i][j];
      if (currentNode === "O" && i !== 0 && j !== 0 && i !== board.length - 1 && j !== board[0].length - 1) {
        board[i][j] = "X";
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const currentNode = board[i][j];
      if (currentNode === "W") {
        board[i][j] = "O";
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
solve([
  ["O", "O"],
  ["O", "O"],
]);
