/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

var wallsAndGates = function (rooms) {
  const WALL = -1;
  const GATE = 0;
  const rowLen = rooms.length;
  const colLen = rooms[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  /*  
      base case 
      1. m 이 length 보다 크거나 0 보다 작을떄 
      2. n 이 length 보다 크거나 0 보다 작을떄 
      3. 벽(-1) OR GATE(0)은 return 
  */
  // 각 빈방(INF)를 가장 가까운 거리로 채운다
  // 문(0) 에서 거꾸로 돌면서 채워나간다 -> min(curr min)
  //
  // recursion(row, col, dis)

  // 2loop(rooms) -> loop dx dy

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (rooms[i][j] === GATE) {
        for (let k = 0; k < 4; k++) {
          const nextRow = dx[k] + i;
          const nextCol = dy[k] + j;
          recursion(nextRow, nextCol, 1);
        }
      }
    }
  }

  function recursion(row, col, distance) {
    // if(row < 0 || row <=)
    if (row < 0 || col < 0 || row >= rowLen || col >= colLen) {
      return;
    }
    if (rooms[row][col] === WALL || rooms[row][col] === GATE) {
      return;
    }
    if (rooms[row][col] <= distance) {
      return;
    }

    rooms[row][col] = distance;

    for (let k = 0; k < 4; k++) {
      const nextRow = dx[k] + row;
      const nextCol = dy[k] + col;
      recursion(nextRow, nextCol, distance + 1);
    }
  }
  console.log({ rooms });
  return rooms;
};

// wallsAndGates([
//   [2147483647, -1, 0, 2147483647],
//   [2147483647, 2147483647, 2147483647, -1],
//   [2147483647, -1, 2147483647, -1],
//   [0, -1, 2147483647, 2147483647],
// ]);
// wallsAndGates([[-1]]);
wallsAndGates([[2147483647, 0, 2147483647, 2147483647, 0, 2147483647, -1, 2147483647]]);
//[[1,0,1,1,0,1,-1,2147483647]]
