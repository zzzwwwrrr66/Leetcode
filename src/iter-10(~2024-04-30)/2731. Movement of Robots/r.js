/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  let sum = 0;
  nums = nums.map((val, i) => {
    if (s[i] === "L") {
      return val - d;
    } else {
      return val + d;
    }
  });
  nums.sort((a, b) => a - b);
  let arr = nums.slice();
  for (let x = 1; x < nums.length; x++) {
    sum = (sum + x * nums[x] - arr[x - 1]) % 1000000007;
    arr[x] = (nums[x] + arr[x - 1]) % 1000000007;
  }
  return sum;
};

sumDistance([-2, 0, 2], "RLL", 3);
