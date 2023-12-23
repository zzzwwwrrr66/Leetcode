/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // greedy
  let currCost = 0;
  let totalCost = 0;
  let position = 0;
  for (let i = 0; i < gas.length; i++) {
    currCost += gas[i] - cost[i];
    totalCost += gas[i] - cost[i];
    if (currCost < 0) {
      currCost = 0;
      position = i + 1;
    }
  }

  return totalCost >= 0 ? position : -1;
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
