/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  // 겹치는 시간대 제거
  // min, max
  // sort 필요 ?
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const lastInterval = res.pop();
    if (!lastInterval) {
      res.push(interval);
      continue;
    }

    if (lastInterval[1] >= interval[0] || lastInterval[0] >= interval[1]) {
      res.push([Math.min(lastInterval[0], interval[0]), Math.max(lastInterval[1], interval[1])]);
      continue;
    }

    res.push(lastInterval);
    res.push(interval);
  }

  return res;
};
console.log(
  merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
  ]), // [[1,3],[4,7]]
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]), // [[1,6],[8,10],[15,18]]
  merge([
    [1, 4],
    [4, 5],
  ]), // [[1,5]]
  merge([
    [1, 4],
    [0, 0],
  ]) // [[0,0],[1,4]]
);
/*
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/
