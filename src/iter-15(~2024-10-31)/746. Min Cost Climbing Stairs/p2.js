/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // 꼭대기가 어딘데 ? -> cost.length
  // 코스트를 사용하면 1번이나 2번 올라갈수있다

  // start 는 0 이나 1 에서 시작
  // Return the minimum cost to reach the top of the floor.
  // Cost 를 가장 적게쓰고 꼭대기에 도달할수 있는수를 return
  for (let i = cost.length - 3; i >= 0; i--) {
    console.log({ i });
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }
  return Math.min(cost[0], cost[1]);
};

minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
