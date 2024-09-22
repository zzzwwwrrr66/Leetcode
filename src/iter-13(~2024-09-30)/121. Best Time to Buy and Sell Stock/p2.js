/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // base case
  if (prices.length === 1) {
    return 0;
  }
  let bestPrice = 0;
  let minNum = Infinity;

  for (const price of prices) {
    console.log({ price });
    if (minNum > price) {
      minNum = price;
      continue;
    }
    bestPrice = Math.max(bestPrice, price - minNum);
  }

  return bestPrice;
};

maxProfit([7, 1, 5, 3, 6, 4]); // 5
