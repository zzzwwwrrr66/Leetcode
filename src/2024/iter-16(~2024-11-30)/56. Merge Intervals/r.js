/**
 * https://leetcode.com/problems/merge-intervals/
 * Time O(N * logN) | Space O(N)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) => (aStart !== bStart ? aStart - bStart : aEnd - bEnd));

  return mergerInterval(intervals);
};

const mergerInterval = (intervals, merged = []) => {
  let prev = intervals.shift();

  for (const curr of intervals) {
    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = curr;

    const hasOverlap = currStart <= prevEnd;
    if (hasOverlap) {
      prev[1] = Math.max(prev[1], curr[1]);
      continue;
    }

    merged.push(prev);
    prev = curr;
  }

  return [...merged, prev];
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
