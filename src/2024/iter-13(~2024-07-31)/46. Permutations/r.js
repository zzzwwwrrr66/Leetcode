/**
 * https://leetcode.com/problems/permutations/solution/
 * Time O(N!) | Space(N!)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  return dfs(nums);
};

var dfs = function (nums, list = [], permutations = []) {
  const isBaseCase = nums.length === list.length;
  if (isBaseCase) return permutations.push(list.slice());

  for (let i = 0; i < nums.length; i++) {
    if (list.includes(nums[i])) continue;

    list.push(nums[i]);
    dfs(nums, list, permutations);
    list.pop();
  }

  return permutations;
};

// const backTrack = (nums, i, permutation, permutations) => {
//   permutation.push(nums[i]);
//   dfs(nums, permutation, permutations);
//   permutation.pop();
// };
console.log(permute([1, 2, 3]));
