const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * https://leetcode.com/problems/last-stone-weight/
 * Time O(N * log(N)) | Space O(N)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // const maxHeap = new MaxPriorityQueue().;

  const maxHeap = getMaxHeap(stones);
  const minHeap = MaxPriorityQueue.from([
    [1, 1],
    [2, 2],
  ]);
  console.log({ minHeap });

  // const minHeap = getPriorityHeap(stones);

  while (1 < maxHeap.size()) {
    const [x, y] = [maxHeap.dequeue().element, maxHeap.dequeue().element];
    const difference = x - y;

    const isPositive = 0 < difference;
    if (isPositive) maxHeap.enqueue(difference);
  }

  return !maxHeap.isEmpty() ? maxHeap.front().element : 0;
};

const getMaxHeap = (stones, maxHeap = new MaxPriorityQueue()) => {
  for (const stone of stones) {
    maxHeap.enqueue(stone);
  }

  return maxHeap;
};
const getMinHeap = (stones, heap = new MinPriorityQueue()) => {
  for (const stone of stones) {
    heap.enqueue(stone);
  }

  return heap;
};

lastStoneWeight([2, 7, 4, 1, 8, 1]);
