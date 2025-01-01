/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1] + dp[i - 2]);
  }

  return dp[n];
};

// climbStairs(3);
climbStairs(4);
