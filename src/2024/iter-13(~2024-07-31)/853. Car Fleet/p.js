/**
  car는 다른차를 제칠수 없다 
  느린차로 같이 가는것은 가능 
  같이가는 것은 가장 느린차의 스피드로 가능하다 
  return 차들의 뭉텅이 개수
 */
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 *
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const pair = [];
  for (let i = 0; i < n; i++) {
    const p = position[i];
    const s = speed[i];
    pair.push([p, s]);
  }
  pair.sort((a, b) => b[0] - a[0]);

  console.log({ pair });

  const stack = [];
  for (const [p, s] of pair) {
    const time = (target - p) / s;
    stack.push(time);
    if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop();
    }
  }

  return stack.length;
};

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
/*
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
*/
