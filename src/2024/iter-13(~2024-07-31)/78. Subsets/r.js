/**
 * https://leetcode.com/problems/subsets/
 * Time O(N * 2^N) | Space(N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = (nums) => {
  nums.sort((a, b) => a - b);

  return dfs(nums);
};

var dfs = (nums, level = 0, set = [], subset = []) => {
  subset.push(set.slice());

  for (let i = level; i < nums.length; i++) {
    backTrack(nums, i, set, subset);
  }

  return subset;
};

const backTrack = (nums, i, set, subset) => {
  set.push(nums[i]);
  dfs(nums, i + 1, set, subset);
  set.pop();
};
console.log(subsets([1, 2, 3]));
// subsets([1, 2, 3]);
// subsets([0]);
