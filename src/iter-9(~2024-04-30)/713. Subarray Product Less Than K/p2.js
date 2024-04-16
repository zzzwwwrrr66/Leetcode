var numSubarrayProductLessThanK = function (nums, k) {
  if (k === 0 || k === 1) return 0;

  let currentMultiple = 1;
  let right = 0;
  let left = 0;
  let result = 0;

  while (right < nums.length) {
    currentMultiple = currentMultiple * nums[right];
    while (currentMultiple >= k) {
      currentMultiple = currentMultiple / nums[left];
      left++;
    }
    result += right - left + 1;
    right++;
  }

  return result;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100);
// numSubarrayProductLessThanK([1, 2, 3], 0);
