/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // base case
  if (nums.length === 1) {
    return 1;
  }
  if (nums.length === 0) {
    return 1;
  }

  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    const curr = nums[i];
    for (let j = 0; j < i; ++j) {
      const prev = nums[j];
      // prev 가 작으면 무조건 dp[j] + 1 이니까 성립가능
      if (prev < curr) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
// lengthOfLIS([0, 1, 0, 3, 2, 3]);
// lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
// lengthOfLIS([4, 10, 4, 3, 8, 9]);

// 한개식 돌면서 prev num 보다 크면 curr num 저장 and 카운트

// [10, 9, 2, 5, 3, 7, 101, 18]
// [ 1, 1, 1, 2, 2, 3, 4, 4]

// [0,1,0,3,2,3]
// [1,2,2,3,3,4]
