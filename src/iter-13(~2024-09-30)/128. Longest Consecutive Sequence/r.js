/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Greedy - Max Score
 * Time O (N * log(N)) | Space O(1)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b); /* Time O(N * log(N)) | Space O(1 || log(N)) */

  let [maxScore, score] = [1, 1];

  for (let i = 1; i < nums.length; i++) {
    /* Time O(N) */
    const isPrevDuplicate = nums[i - 1] === nums[i];
    if (isPrevDuplicate) continue;

    const isStreak = nums[i] === nums[i - 1] + 1;
    if (isStreak) {
      score++;
      continue;
    }

    maxScore = Math.max(maxScore, score);
    score = 1;
  }

  return Math.max(maxScore, score);
};

// longestConsecutive([100, 4, 200, 1, 3, 2]); // return 4 -> [1, 2, 3, 4]

longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]); // return 7
