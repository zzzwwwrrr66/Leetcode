/**
 * Hash Map - Matrix
 * Time O(ROWS * COLS) | Space O(ROWS * COLS)
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  const boards = 3;
  const [boxes, cols, rows] = getBoards(boards); /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
  // console.log(getBoards(boards));
  console.log({ boxes, cols, rows });
  // boxes : [ ...9*[v*9] ]
  // cols : [ ...9*[v*9] ]
  // boxes : [ ...9*[v*9] ]
  return searchGrid(board, boxes, cols, rows); /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

var initBoard = (rows, cols) => new Array(rows).fill().map(() => new Array(cols).fill(false));

var getBoards = (boards) => {
  const [rows, cols] = [9, 9];

  return new Array(boards).fill().map(() => initBoard(rows, cols));
};

var searchGrid = (board, boxes, cols, rows) => {
  const [_rows, _cols] = [9, 9];

  for (let row = 0; row < _rows; row++) {
    /* Time O(ROWS)*/
    for (let col = 0; col < _cols; col++) {
      /* Time O(COLS)*/
      const char = board[row][col];
      const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      const isEmpty = char === ".";
      if (isEmpty) continue;

      const hasMoved = boxes[index][char - 1] || cols[col][char - 1] || rows[row][char - 1];
      if (hasMoved) return false;

      rows[row][char - 1] = true; /* Space O(ROWS * COLS)*/
      cols[col][char - 1] = true; /* Space O(ROWS * COLS)*/
      boxes[index][char - 1] = true; /* Space O(ROWS * COLS)*/
    }
  }

  return true;
};

isValidSudoku([
  ["5", "3", "3", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
