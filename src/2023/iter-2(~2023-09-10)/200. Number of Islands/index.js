/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let cnt = 0;

    const DFS = (x, y, grid) => {
      if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
        return;
      }

      if(grid[x][y] === '0') return;
      grid[x][y] = '0';
      cnt+=1
      

      for(let i = 0; i < 4; i++) {
        const nx = x + Number(dx[i]);
        const ny = y + Number(dy[i]);
        
        DFS(nx, ny, grid);
      }
    }

    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === '1') {
          DFS(i, j, grid);
          result+=1;
        }
      }
    }

    console.log('count check', cnt);

    return result;
};



const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(grid), 
// numIslands(grid2)
);
;