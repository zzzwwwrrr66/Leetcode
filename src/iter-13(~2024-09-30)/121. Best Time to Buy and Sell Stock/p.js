/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // base case
  if (prices.length === 1) {
    return 0;
  }
  let result = 0;
  let minNum = prices[0];

  for (const price of prices) {
    if (minNum > price) {
      minNum = price;
    } else {
      result = Math.max(result, price - minNum);
    }
  }

  return result;
};

maxProfit([7, 1, 5, 3, 6, 4]); // 5
