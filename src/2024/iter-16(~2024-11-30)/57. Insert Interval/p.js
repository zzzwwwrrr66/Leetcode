/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  const res = [];
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const currS = interval[0];
    const currE = interval[1];
    const newS = newInterval[0];
    const newE = newInterval[1];
    if (newE < currS) {
      res.push(newInterval);
      return [].concat(res, intervals.slice(i));
    } else if (newS > currE) {
      res.push(interval);
    } else {
      newInterval = [Math.min(currS, newS), Math.max(currE, newE)];
    }
  }

  res.push(newInterval);
  return res;
};

console.log(
  // insert(
  //   [
  //     [1, 3],
  //     [6, 9],
  //   ],
  //   [2, 5]
  // ),
  "---",
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
  // insert([[1, 5]], [2, 3])
); // [[1,5],[6,9]]
