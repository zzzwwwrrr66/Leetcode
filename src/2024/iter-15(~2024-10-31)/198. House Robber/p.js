/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const rob1 = i - 2 < 0 ? nums[i] : nums[i - 2] + nums[i];
    const rob2 = i - 1 < 0 ? 0 : nums[i - 1];
    nums[i] = Math.max(rob1, rob2);
  }

  return nums[nums.length - 1];
};

rob([1, 2, 3, 1]);
/*
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/

rob([2, 7, 9, 3, 1]);
/*
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

rob([2, 1, 1, 2]); // return 4
