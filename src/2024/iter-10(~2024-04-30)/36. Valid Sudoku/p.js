/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // create Map
  const rowMap = new Map();
  const colMap = new Map();
  const gridMap = new Map();
  for (let i = 0; i < 9; i++) {
    rowMap.set(i, new Set());
    colMap.set(i, new Set());
    gridMap.set(i, new Set());
  }

  // check
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const currRowSet = rowMap.get(i);
      const currRowVal = String(board[i][j]);
      if (currRowSet.has(currRowVal)) {
        console.log("row");
        console.log({ rowMap });
        console.log({ colMap });
        console.log({ gridMap });
        return false;
      } else if (currRowVal !== ".") {
        currRowSet.add(currRowVal);
      }

      const currColSet = colMap.get(i);
      const currColVal = String(board[j][i]);
      if (currColSet.has(currColVal)) {
        console.log("col");
        console.log({ rowMap });
        console.log({ colMap });
        console.log({ gridMap });
        return false;
      } else if (currColVal !== ".") {
        currColSet.add(currColVal);
      }

      const currGridKey = handleGetCurrKey(i, j);
      const currGridSet = gridMap.get(currGridKey);
      const currGridVal = String(board[i][j]);
      if (currGridSet.has(currGridVal)) {
        console.log("grid");
        console.log({ rowMap });
        console.log({ colMap });
        console.log({ gridMap });
        return false;
      } else if (currGridVal !== ".") {
        currGridSet.add(currGridVal);
      }
    }
  }

  console.log({ rowMap });
  console.log({ colMap });
  console.log({ gridMap });

  return true;
};

function handleGetCurrKey(i, j) {
  let currKey = "";
  if (i < 3) {
    if (j < 3) {
      currKey = 0;
    } else if (j < 6) {
      currKey = 1;
    } else {
      currKey = 2;
    }
  } else if (i < 6) {
    if (j < 3) {
      currKey = 3;
    } else if (j < 6) {
      currKey = 4;
    } else {
      currKey = 5;
    }
  } else {
    if (j < 3) {
      currKey = 6;
    } else if (j < 6) {
      currKey = 7;
    } else {
      currKey = 8;
    }
  }

  return currKey;
}
// 0: (0,0) (0,1) (0,2) (1,0) (1,1) (1,2) (2,0) (2,1) (2,2)
// 1: (0,3) (0,4) (0,5) (1,3) (1,4) (1,5) (2,3) (2,4) (2,5)
// 2: (0,6) (0,7) (0,8) (1,6) (1,7) (1,8) (2,6) (2,7) (2,8)

// 3: (3,0) (3,1) (3,2) (4,0) (4,1) (4,2) (5,0) (5,1) (5,2)

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
