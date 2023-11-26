// 동전이 무한
// greedy X ( 무조건 다나누면 안될 케이스들이있음 ) -> dfs & memo = FIND min count -> DP => 그냥처음부터 끝까지

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
/*  
몇번을 나눠야 할지 정해야함.. -> 그냥 DP 하면됬음

*/

console.log(coinChange([186, 419, 83, 408], 6249));
// console.log(coinChange([1, 2, 5, 10], 18));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));

/* 
Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/
