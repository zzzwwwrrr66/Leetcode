/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rowLen = heights.length;
  const colLen = heights[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const pacificVisited = new Set();
  const atlanticVisited = new Set();
  const Pacific = 0;
  const Atlantic = 1;
  const result = [];

  for (let i = 0; i < colLen; i++) {
    // Pacific
    recursion(0, i, pacificVisited, heights[0][i]);
    // Atlantic
    recursion(rowLen - 1, i, atlanticVisited, heights[rowLen - 1][i]);
  }
  for (let i = 0; i < rowLen; i++) {
    // Pacific
    recursion(i, 0, pacificVisited, heights[i][0]);
    // Atlantic
    recursion(i, colLen - 1, atlanticVisited, heights[i][colLen - 1]);
  }

  function recursion(row, col, visited, prevHeight) {
    if (row < 0 || col < 0 || row >= rowLen || col >= colLen) {
      return;
    }
    const currVal = `${row}#${col}`;
    if (visited.has(currVal)) {
      return;
    }
    const currHeight = heights[row][col];
    if (currHeight < prevHeight) {
      return;
    }

    visited.add(currVal);

    for (let k = 0; k < 4; k++) {
      const nextRow = dx[k] + row;
      const nextCol = dy[k] + col;
      recursion(nextRow, nextCol, visited, heights[row][col]);
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      const currVal = `${i}#${j}`;

      if (pacificVisited.has(currVal) && atlanticVisited.has(currVal)) {
        result.push(currVal);
      }
    }
  }

  return result.map((v) => v.split("#"));

  /*
    # recursion(defaultRow, defaultCol,row, col, visited)
      1 loop (4방향) 현재 h 보다 크면
      # base case
        row, col 이 defaultRow, defaultCol 보다 크면 return
        row, col 이 0 보다 작으면 return
        currHeight 이 defaultHeight 보다 크면 return
        0, 마지막 / 마지막 , 0 은 항상 true 이니까 return
      # result case
        row, col 마지막까지 오면 oceanMap 에 push
        oceanMap 둘다(Pacific, Atlantic) true면 result 에 push
   */
};
pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
]);
pacificAtlantic([[0, 0]]);
/*
  Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
  Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
*/
