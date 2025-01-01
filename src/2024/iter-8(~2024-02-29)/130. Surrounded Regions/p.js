//주위것들을 뒤집을수있는 조건이 if (currentNode === "O" && (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)) 라는 소리?
// 테두리의 O 일때는 바꾸면 안된다
// 나머지것들은 "X"로 바꿈

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  const recursion = (i, j, board) => {
    if (i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] === "X" || board[i][j] === "W") {
      return;
    }
    board[i][j] = "W";
    recursion(i - 1, j, board);
    recursion(i, j + 1, board);
    recursion(i + 1, j, board);
    recursion(i, j - 1, board);
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const currentNode = board[i][j];
      if (currentNode === "O" && (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)) {
        recursion(i, j, board);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const currentNode = board[i][j];
      if (currentNode === "O") {
        board[i][j] = "X";
      } else if (currentNode === "W") {
        board[i][j] = "O";
      }
    }
  }

  return board;
};

// solve([
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ]);
solve([
  ["O", "O"],
  ["O", "O"],
]);
