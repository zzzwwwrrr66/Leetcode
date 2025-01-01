/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let freq = Array(26).fill(0);
  for (let task of tasks) {
    freq[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }
  freq.sort((a, b) => b - a);
  let chunk = freq[0] - 1;
  let idle = chunk * n;

  for (let i = 1; i < 26; i++) {
    // 쉬어야 하는 만큼 값을 구한다
    idle -= Math.min(chunk, freq[i]);
  }

  return idle < 0 ? tasks.length : tasks.length + idle;
};

// leastInterval(["A", "A", "A", "B", "B", "B"], 2);
leastInterval(["A", "A", "A"], 3);
