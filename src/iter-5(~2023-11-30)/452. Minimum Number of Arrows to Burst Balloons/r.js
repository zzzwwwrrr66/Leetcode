var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let prev = null,
    count = 0;
  console.log(points);
  for (let [start, end] of points) {
    if (prev == null || prev < start) {
      count++;
      prev = end;
    } else prev = Math.min(prev, end);
  }
  return count;
};

findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]);
