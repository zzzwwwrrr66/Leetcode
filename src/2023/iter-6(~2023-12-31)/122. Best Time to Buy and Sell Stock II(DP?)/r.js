/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // base case
  if (prices.length === 1) {
    return 0;
  }
  let curHold = -Infinity;
  let curNotHold = 0;

  for (const price of prices) {
    const prevHold = curHold;
    const prevNotHold = curNotHold;

    curHold = Math.max(prevHold, prevNotHold - price);

    curNotHold = Math.max(prevNotHold, prevHold + price);
  }

  return curNotHold;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
