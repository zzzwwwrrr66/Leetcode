/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  // base
  if (nums.length === 1) {
    return 1;
  }

  const numsCount = Array(n).fill(1);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const startNum = nums[i];
      const tmpNum = nums[j];
      if (startNum < tmpNum) {
        numsCount[i] = Math.max(numsCount[i], numsCount[j] + 1);
      }
    }
  }

  return Math.max(...numsCount);
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
lengthOfLIS([0, 1, 0, 3, 2, 3]);
// lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
