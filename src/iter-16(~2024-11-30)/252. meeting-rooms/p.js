/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  if (intervals.length === 0 || intervals.length === 1) {
    return true;
  }

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let prevS = intervals[0][0];
  let prevE = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const currS = intervals[i][0];
    const currE = intervals[i][1];
    if (prevS == currS) {
      return false;
    }
    if (prevE > currS) {
      return false;
    }
    prevS = currS;
    prevE = currE;
  }
  return true;
};

console
  .log
  // minMeetingRooms([
  //   [0, 30],
  //   [5, 10],
  //   [15, 20],
  // ]) // false 2
  // minMeetingRooms([
  //   [7, 10],
  //   [2, 4],
  // ])
  // minMeetingRooms([
  //   [13, 15],
  //   [1, 13],
  // ])
  // minMeetingRooms([
  //   [19, 20],
  //   [1, 10],
  //   [5, 14],
  // ])

  // minMeetingRooms([
  //   [6, 15],
  //   [13, 20],
  //   [6, 17],
  // ]) // false
  ();
