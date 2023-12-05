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

  const memo = Array(amount + 1).fill(Infinity);
  memo[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      memo[i] = Math.min(memo[i], memo[i - coin] + 1);
    }
  }
  return memo[amount] === Infinity ? -1 : memo[amount];
};

coinChange([1, 2, 5], 11);
