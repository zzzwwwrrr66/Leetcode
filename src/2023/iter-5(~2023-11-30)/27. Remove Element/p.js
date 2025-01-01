/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  return nums.filter((v) => v !== val).length;
};

// Input: nums = [3,2,2,3], val = 3
