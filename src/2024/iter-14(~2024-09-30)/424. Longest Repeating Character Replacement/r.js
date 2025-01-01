/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let res = 0;
  let count = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let windowLen = right - left + 1;
    count.set(s[right], 1 + (count.get(s[right]) || 0));

    // len - Math.max(...count.values()) = 리플레이스가능한 단어들
    if (windowLen - Math.max(...count.values()) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    windowLen = right - left + 1;
    res = Math.max(res, windowLen);
  }
  console.log({ res });

  return res;
};
//  s = "ABAB", k = 2
// characterReplacement("ABAB", 2); // return 4
// characterReplacement("AABABBA", 1); // return 4
characterReplacement("ABABBA", 2); // return 4
