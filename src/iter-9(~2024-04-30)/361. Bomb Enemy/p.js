/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  // 0 = 빈칸, E => Enemy,
  // W 에 부딪힐때까지 계속됨
  // 폭탄이 놓일 위치를 찾는다(0 중에 ) E의 카운터를 세야함
  // 4방향 끝까지 폭탄이 감 & 4방향의 Enemy 를 처치 가능
  const m = grid.length;
  const n = grid[0].length;
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "0") {
        const eCount = [];
        dfs(i - 1, j, eCount, "top");
        dfs(i, j + 1, eCount, "right");
        dfs(i + 1, j, eCount, "bottom");
        dfs(i, j - 1, eCount, "left");

        maxCount = Math.max(maxCount, eCount.length);
      }
    }
  }

  function dfs(x, y, eCount, direction) {
    if (x < 0 || y < 0 || x > m - 1 || y > n - 1) {
      return;
    }
    if (grid[x][y] === "W") {
      return;
    }
    if (grid[x][y] === "E") {
      eCount.push("E");
    }

    // top, right, bottom, left
    if (direction === "top") {
      dfs(x - 1, y, eCount, "top");
    } else if (direction === "right") {
      dfs(x, y + 1, eCount, "right");
    } else if (direction === "bottom") {
      dfs(x + 1, y, eCount, "bottom");
    } else if (direction === "left") {
      dfs(x, y - 1, eCount, "left");
    }
  }

  return maxCount;
};
console.log(
  maxKilledEnemies([
    ["0", "E", "0", "0"],
    ["E", "0", "W", "E"],
    ["0", "E", "0", "0"],
  ])
);
console.log(maxKilledEnemies([["0", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "W"]]));
