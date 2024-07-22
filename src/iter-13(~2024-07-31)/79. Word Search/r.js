/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bcsFunc = (x, y, z) => {
    if (z === word.length) return true;

    if (x < 0 || x >= row || y < 0 || y >= col || word.charAt(z) !== board[x][y]) return false;

    const visited = board[x][y];
    board[x][y] = ".";

    const result =
      bcsFunc(x - 1, y, z + 1) || bcsFunc(x, y + 1, z + 1) || bcsFunc(x + 1, y, z + 1) || bcsFunc(x, y - 1, z + 1);
    board[x][y] = visited;
    return result;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (bcsFunc(i, j, 0)) return true;
    }
  }

  return false;
};

exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "E", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCEFSADEESE"
);
