const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (tasks.length === 0) {
    return 0;
  }

  const waiting = new Queue();
  const processing = new MaxPriorityQueue();
  let time = 0;

  const tasksCntMap = new Map();
  tasks.forEach((t) => {
    if (!tasksCntMap.has(t)) {
      tasksCntMap.set(t, 1);
      return;
    }
    tasksCntMap.set(t, tasksCntMap.get(t) + 1);
  });

  for (const currTask of tasksCntMap.values()) {
    processing.enqueue(currTask);
  }
  console.log({ processing: processing.toArray() });

  while (waiting.size() > 0 || processing.size() > 0) {
    time += 1;

    if (processing.size() === 0) {
      time = waiting.front()["canTime"];
    } else {
      const canTime = time + n;
      const taskLeft = processing.dequeue().element - 1;
      if (taskLeft > 0) {
        waiting.enqueue({ task: taskLeft, canTime });
      }
    }

    if (waiting.front() && waiting.front()["canTime"] === time) {
      processing.enqueue(waiting.dequeue()["task"]);
    }
  }

  return time;
};

leastInterval(["A", "A", "A", "B", "B", "B"], 2);
//  A -> B -> idle -> A -> B -> idle -> A -> B , return 8

leastInterval(["A", "C", "A", "B", "D", "B"], 1);
// 6 A -> B -> C -> D -> A -> B.

leastInterval(["A", "A", "A", "B", "B", "B"], 3);
// 10 A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
