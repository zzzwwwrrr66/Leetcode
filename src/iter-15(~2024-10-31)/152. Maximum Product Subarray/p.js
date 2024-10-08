/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // base case
  if (nums.length === 1) {
    return nums[0];
  }
  let maxNum = 1;
  let minNum = 1;
  let res = -Infinity;
  for (const n of nums) {
    const tmp = maxNum * n;
    maxNum = Math.max(n, tmp, minNum * n);
    minNum = Math.min(n, minNum * n, tmp);
    res = Math.max(maxNum, res);
  }

  return res;
};

// maxProduct([2, 3, -2, 4]); // 6
// maxProduct([-2, 0, -1]); // 0
// maxProduct([-2, 3, -4]); // 24
maxProduct([-4, -3, -2]); // 12
