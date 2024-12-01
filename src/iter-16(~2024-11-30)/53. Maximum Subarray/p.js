/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // sub array 중 가장큰 sum 찾기
  // return: sum

  // base case
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let curr = 0;
  let res = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (curr < 0) {
      // 마이너스 무시
      curr = 0;
    }
    curr += currNum;
    res = Math.max(res, curr);
  }

  return res;
};
// maxSubArray([-2, 1]); // 1
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
maxSubArray([1]); // 1
maxSubArray([5, 4, -1, 7, 8]); // 23

/**
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */
