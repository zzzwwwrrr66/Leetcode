/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  if (intervals.length === 1) {
    return 1;
  }

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const sortEndTimes = [];
  for (let i = 0; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];
    const x = sortEndTimes[sortEndTimes.length - 1];
    if (x && x <= start) {
      sortEndTimes.pop();
    }
    sortEndTimes.push(end);
    sortEndTimes.sort((a, b) => b - a);
  }

  // return res;
  return sortEndTimes.length;
};

console.log(
  // canAttendMeetings([
  //   [2, 15],
  //   [36, 45],
  //   [9, 29],
  //   [16, 23],
  //   [4, 9],
  // ]), // 2
  canAttendMeetings([
    [1, 5],
    [8, 9],
    [8, 9],
  ]) //2
  // minMeetingRooms([
  //   [0, 30],
  //   [5, 10],
  //   [15, 20],
  // ]) // false 2
  // minMeetingRooms([
  //   [7, 10],
  //   [2, 4],
  // ]) //1
  // minMeetingRooms([
  //   [13, 15],
  //   [1, 13],
  // ]) // 1
  // minMeetingRooms([
  //   [19, 20],
  //   [1, 10],
  //   [5, 14],
  // ]) // 2

  // minMeetingRooms([
  //   [6, 15],
  //   [13, 20],
  //   [6, 17],
  // ]) // false
);
