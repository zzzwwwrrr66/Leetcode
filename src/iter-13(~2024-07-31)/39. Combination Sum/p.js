/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  /* 
      1. v 가 target 보다 크면 return 
      2. sum 이 target보다 크면 return 
      3. recursion 이 끝난후 pop 
  */
  candidates.sort((a, b) => a - b);
  const res = [];
  function dfs(list = [], target, index = 0) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push(list);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      dfs([...list, candidates[i]], target - candidates[i], i);
    }

    list.pop();
    return list;
  }

  dfs([], target);

  return res;
};

combinationSum([2, 3, 6, 7], 7);

/*
Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []
 */
