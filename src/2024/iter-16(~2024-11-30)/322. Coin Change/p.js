/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // base case
  if (amount === 0) {
    return 0;
  }
  if (coins.length === 1) {
    if (amount % coins[0] === 0) {
      return amount / coins[0];
    } else {
      return -1;
    }
  }

  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11);
/**
  Output: 3
  Explanation: 11 = 5 + 5 + 1
 */
