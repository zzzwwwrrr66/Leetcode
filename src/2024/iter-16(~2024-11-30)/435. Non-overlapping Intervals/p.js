/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let res = 0;
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];
    // if overlap
    if (currInterval[0] >= prevEnd) {
      prevEnd = currInterval[1];
    } else {
      res += 1;
      prevEnd = Math.min(prevEnd, currInterval[1]);
    }
  }

  return res;
};
eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]); // 1
// eraseOverlapIntervals([
//   [-52, 31],
//   [-73, -26],
//   [82, 97],
//   [-65, -11],
//   [-62, -49],
//   [95, 99],
//   [58, 95],
//   [-31, 49],
//   [66, 98],
//   [-63, 2],
//   [30, 47],
//   [-40, -26],
// ]);
eraseOverlapIntervals([
  [1, 2],
  [1, 2],
  [1, 2],
]); // 2
eraseOverlapIntervals([
  [1, 2],
  [2, 3],
]); // 0
