/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // base case
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(...nums);
  }

  // idx - 1, currVal + idx-2
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
  }

  return nums[nums.length - 1];
};

rob([1, 2, 3, 1]);
