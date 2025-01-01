const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const q = new MaxPriorityQueue();

  for (const [a, b] of points) {
    // console.log(`${a}, ${b}: `, dist(a, b, 0, 0));
    const currVal = squaredDistance(a, b);
    if (q.size() < k) {
      q.enqueue([a, b], currVal);
      continue;
    }

    if (q.size() >= k && q.front().priority >= currVal) {
      q.dequeue();
      q.enqueue([a, b], currVal);
    }
  }

  return q.toArray().map((v) => v.element);
};

const squaredDistance = (x, y) => x ** 2 + y ** 2;

kClosest(
  // [[-2,2]]
  [
    [1, 3],
    [-2, 2],
  ],
  1
);

kClosest(
  // [[3,3],[-2,4]]
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2
);

kClosest(
  // [[-5,4],[4,6]]
  [
    [-5, 4],
    [-6, -5],
    [4, 6],
  ],
  2
);
