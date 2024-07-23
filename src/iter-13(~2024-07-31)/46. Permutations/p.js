/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) {
    return [[]];
  }
  function dfs(list, res) {
    if (list.length === nums.length) {
      res.push(list.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i];
      if (list.includes(curr)) {
        continue;
      }
      list.push(curr);
      dfs(list, res);
      list.pop();
    }

    return res;
  }

  const res = dfs([], []);

  return res;
};
console.log(permute([1, 2, 3]));
/*
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]
*/
