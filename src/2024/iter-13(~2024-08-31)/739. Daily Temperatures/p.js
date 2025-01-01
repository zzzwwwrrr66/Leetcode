/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;

  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const result = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const currT = temperatures[i];
    while (stack.length > 0 && currT > stack[stack.length - 1][0]) {
      const [stackT, stackIdx] = stack.pop();
      result[stackIdx] = i - stackIdx;
    }
    stack.push([currT, i]);
  }

  return result;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
