const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const q = new MinPriorityQueue();

  for (const num of nums) {
    if (q.size() < k) {
      q.enqueue(num);
      continue;
    }
    if (q.front().element < num) {
      q.dequeue();
      q.enqueue(num);
    }
  }
  return q.front().element;
};

// findKthLargest([3, 2, 1, 5, 6, 4], 2);
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
