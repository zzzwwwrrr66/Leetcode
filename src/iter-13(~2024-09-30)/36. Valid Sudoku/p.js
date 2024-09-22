/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 1. 채워진 칸만 생각한다
  // 2. hash?  (3개 -> 가로,세로,3x3)
  // 3. row col 9 고정
  const fixedNum = 9;
  const rowMap = Array.from(Array(fixedNum), () => Array(fixedNum).fill(0));
  const colMap = Array.from(Array(fixedNum), () => Array(fixedNum).fill(0));
  const boxMap = Array.from(Array(fixedNum), () => Array(fixedNum).fill(0));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // rowMap
      const currNum = board[i][j];
      if (currNum !== "." && rowMap[i][currNum - 1] === 0) {
        rowMap[i][currNum - 1] = 1;
      } else if (rowMap[i][currNum - 1] === 1) {
        return false;
      }

      // col map
      const colCurrNum = board[j][i];
      if (colCurrNum !== "." && colMap[i][colCurrNum - 1] === 0) {
        colMap[i][colCurrNum - 1] = 1;
      } else if (colMap[i][colCurrNum - 1] === 1) {
        return false;
      }

      // 3x3 map
      const boxCurrNum = board[i][j];
      // key is getting Index
      const index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxCurrNum !== "." && boxMap[index][boxCurrNum - 1] === 0) {
        boxMap[index][boxCurrNum - 1] = 1;
      } else if (boxMap[index][boxCurrNum - 1] === 1) {
        return false;
      }
    }
  }

  return true;
};
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    ["3", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
