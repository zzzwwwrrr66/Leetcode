/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length <= 2) {
    return Math.min(...cost);
  }
  // 꼭대기가 어딘데 ? -> cost.length
  // 코스트를 사용하면 1번이나 2번 올라갈수있다

  // start 는 0 이나 1 에서 시작
  // Return the minimum cost to reach the top of the floor.
  // Cost 를 가장 적게쓰고 꼭대기에 도달할수 있는수를 return
  const costMap = Array(cost.length + 1).fill(0);

  for (let i = 2; i < costMap.length; i++) {
    const idx1 = i - 1;
    const idx2 = i - 2;
    const cost1 = costMap[idx1] + cost[idx1];
    const cost2 = costMap[idx2] + cost[idx2];
    const minCost = Math.min(cost1, cost2);
    costMap[i] = minCost;
  }
  const res = costMap[costMap.length - 1];
  return res;
};

minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
