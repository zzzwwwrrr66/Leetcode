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

  for (let i = 0; i < coins.length; i++) {
    const currCoin = coins[i];
    for (let j = currCoin; j <= amount; j++) {
      memo[j] = Math.min(memo[j], memo[j - currCoin] + 1);
    }
  }

  return memo[amount] === Infinity ? -1 : memo[amount];
};
console.log(coinChange([1, 2, 5], 11));
