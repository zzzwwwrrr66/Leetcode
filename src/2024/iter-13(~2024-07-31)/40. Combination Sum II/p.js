/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  /*
      1. 중복 금지 
  */
  candidates.sort((a, b) => a - b);
  const res = [];
  function dfs(list, target, index) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push(list.slice());
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      const curr = candidates[i];
      if (index < i && candidates[i - 1] === candidates[i]) {
        continue;
      }
      if (curr > target) {
        continue;
      }
      list.push(curr);
      dfs(list, target - curr, i + 1);
      list.pop();
    }

    return list;
  }
  dfs([], target, 0);
  console.log({ res });
  return res;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
/*
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
*/
