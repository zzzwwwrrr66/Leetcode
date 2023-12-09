/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // sliding window
  // left and right
  // hash map
  const dict = new Map();
  let left = 0;
  let right = nums.length - 1;
  while (left <= right && left < nums.length) {
    if (!dict.has(nums[left])) {
      dict.set(nums[left], 1);
    } else {
      dict.set(nums[left], dict.get(nums[left]) + 1);
    }

    if (dict.get(nums[left]) >= 3) {
      const tmp = nums[right];
      nums.pop();
      right--;
      nums[left] = nums[right];
      nums[right] = tmp;
    }

    left++;
  }
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]); // return [0,0,1,1,2,3,3]
//  4, 8
