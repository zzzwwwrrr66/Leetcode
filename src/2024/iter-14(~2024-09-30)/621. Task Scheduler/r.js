const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");

/**
 * https://leetcode.com/problems/task-scheduler/
 * Time O(N * log(N)) | Space O(N)
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // base case
  if (n === 0) {
    return tasks.length;
  }

  const frequencyMap = getFrequencyMap(tasks);
  const maxHeap = getMaxHeap(frequencyMap);

  console.log({ maxHeap });

  return getMinimumCpuIntervals(maxHeap, n);
};

/** Create Alphabet Map */
var getFrequencyMap = (tasks, frequencyMap = new Array(26).fill(0)) => {
  for (const task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);

    frequencyMap[index]++;
  }

  return frequencyMap;
};

/** Create Max heap */
const getMaxHeap = (frequencyMap, maxHeap = new MaxPriorityQueue()) => {
  for (const frequency of frequencyMap) {
    const hasFrequency = 0 < frequency;
    if (hasFrequency) maxHeap.enqueue(frequency);
  }

  return maxHeap;
};

const getMinimumCpuIntervals = (maxHeap, n, cpuIntervals = [0]) => {
  while (!maxHeap.isEmpty()) {
    const { iterations, coolingPeriodQueue } = execute(n, maxHeap, cpuIntervals);

    reQueueCoolingPeriod(coolingPeriodQueue, maxHeap);

    if (!maxHeap.isEmpty()) cpuIntervals[0] += iterations;
  }

  return cpuIntervals[0];
};

const execute = (n, maxHeap, cpuIntervals, iterations = n + 1, coolingPeriodQueue = new Queue()) => {
  while (0 < iterations && !maxHeap.isEmpty()) {
    const frequency = maxHeap.dequeue().element;

    const hasFrequency = 0 < frequency - 1;
    if (hasFrequency) coolingPeriodQueue.enqueue(frequency - 1);

    cpuIntervals[0]++;
    iterations--;
  }

  return { iterations, coolingPeriodQueue };
};

const reQueueCoolingPeriod = (coolingPeriodQueue, maxHeap) => {
  while (!coolingPeriodQueue.isEmpty()) {
    maxHeap.enqueue(coolingPeriodQueue.dequeue());
  }
};

leastInterval(["A", "A", "A", "B", "B", "B"], 2);
//  A -> B -> C -> D -> A -> B.

leastInterval(["A", "C", "A", "B", "D", "B"], 1);
// 6 A -> B -> C -> D -> A -> B.

leastInterval(["A", "A", "A", "B", "B", "B"], 3);
// 10 A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
