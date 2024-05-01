/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // r l
  let left = 0;
  let right = 1;
  let result = 0;
  if (k === nums[0]) {
    result++;
  }

  while (right < nums.length) {
    const sum = nums[right] + nums[left];

    if (sum === k) {
      result++;
    } else if (sum > k) {
      left++;
    }
    right++;
  }
};
subarraySum([1, 1, 1], 2);
/**
  Input: nums = [1,1,1], k = 2
  Output: 2
 */
