/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  /*
      1. word 를 찾아가기
      2. 4방향 이동가능 
      3. 순서대로의 방향이 아니면 return 
      4. 돈후 pop()

      ------------------------------------------

      arguments(recursuion)
      - x, y
      - searchIndex

      board 2loop run function 

      base, error case 
      1. x,y 가 0 보다 작을때 length 보다 크거나같을때
      2. 순서대로의 방향이 아니면 ( searchIndex 으로 찾기 )
      3. res 가 true면 return

      loop( 4 direction )
      1. recursion
      2. pop()
      3. return boolean
  */
  const n = board.length;
  const m = board[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let res = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const curr = board[i][j];
      if (curr === word[0]) {
        const visited = Array.from(Array(n), () => Array(m).fill(false));
        if (dfs(i, j, 0, visited)) {
          return true;
        }
      }
    }
  }

  function dfs(x, y, searchIndex, visited) {
    if (searchIndex === word.length) {
      return true;
    }
    if (x < 0 || y < 0 || x >= n || y >= m || board[x][y] !== word[searchIndex]) {
      return false;
    }
    if (visited[x][y]) {
      return false;
    }

    visited[x][y] = true;
    const result =
      dfs(x - 1, y, searchIndex + 1, visited) ||
      dfs(x, y + 1, searchIndex + 1, visited) ||
      dfs(x + 1, y, searchIndex + 1, visited) ||
      dfs(x, y - 1, searchIndex + 1, visited);

    visited[x][y] = false;

    return result;
  }

  return false;
};
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  ),
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCEFSADEESE"
  )
);
/*
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
 */
