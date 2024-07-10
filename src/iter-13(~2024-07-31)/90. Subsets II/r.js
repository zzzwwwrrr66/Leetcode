/**
 * https://leetcode.com/problems/subsets-ii/
 * Time O(N * 2^N) | Space O(N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);

  return dfs(nums);
};

const dfs = (nums, index = 0, set = [], subset = []) => {
  subset.push(set.slice());

  for (let i = index; i < nums.length; i++) {
    const isDuplicate = index < i && nums[i - 1] === nums[i];
    if (isDuplicate) continue;

    set.push(nums[i]);
    dfs(nums, i + 1, set, subset);
    set.pop();
  }

  return subset;
};

const backTrack = (nums, i, set, subset) => {
  set.push(nums[i]);
  dfs(nums, i + 1, set, subset);
  set.pop();
};

subsetsWithDup([1, 2, 2]);
