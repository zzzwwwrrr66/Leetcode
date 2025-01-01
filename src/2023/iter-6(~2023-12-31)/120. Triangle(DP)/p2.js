/**
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * ## dfs
 * 1. 현재의 갈수있는 경로중에서 가장 작은수를 찾아야함
 * 2. 현재의 index, index + 1 만 갈수있음
 * 3. dfs( 현재 레벨, 지금 index, nextIndex )
 */
var minimumTotal = function (triangle) {
  // base case
  if (triangle.length === 1) {
    return triangle[0][0];
  }

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] = triangle[i][j] + triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] = triangle[i][j] + triangle[i - 1][j - 1];
      } else {
        const curr = triangle[i][j] + triangle[i - 1][j];
        const right = triangle[i][j] + triangle[i - 1][j - 1];
        triangle[i][j] = Math.min(curr, right);
      }
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
};

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[-10]]));

// [[-1],[2,3],[1,-1,-3]] return -1

// -1 + 3 + -3 = -1??

/**
 *     -1
 *    2,  3
 * 1 , - 1, -3
 */
