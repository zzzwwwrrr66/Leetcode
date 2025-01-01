const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * Time O(N * log(K)) | Space O(K)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue();

  for (const num of nums) {
    minHeap.enqueue(num);

    const isAtCapacity = k < minHeap.size();
    if (isAtCapacity) minHeap.dequeue();
  }

  return minHeap.front().element;
};

// findKthLargest([3, 2, 1, 5, 6, 4], 2);
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
