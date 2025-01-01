/*
greedy
The Idea 
update position if current tank < 0
check if total tank is < 0
When total tank is positive, it means we have enough gas to over all the previous path.
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let curTank = 0,
    totalTank = 0,
    pos = 0;
  for (let i = 0; i < gas.length; i++) {
    // curTank 가 0 보다 작을경우 그 포지션은 안되니까
    curTank += gas[i] - cost[i];
    totalTank += gas[i] - cost[i];
    if (curTank < 0) {
      curTank = 0;
      pos = i + 1;
    }
  }
  return totalTank < 0 ? -1 : pos;
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);

/*
1. 일단 loop로 다돈다

- totalTank => 순서대로 돌아도 totalTank 로 다돌면 0 보다 높은지 아닌지 나옴
- curTank => 현재의 가솔린만 확인 0 보다 낮으면 다음의 index로 설정
*/
