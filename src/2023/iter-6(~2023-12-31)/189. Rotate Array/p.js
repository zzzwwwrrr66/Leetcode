/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // base case
  if (nums.length === 1 || k === 0) {
    return nums;
  }
  k = k % nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = k - 1; i >= 0; i--) {
    const tmp = nums.pop();
    nums[i] = tmp;
  }
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1, 2], 5);
