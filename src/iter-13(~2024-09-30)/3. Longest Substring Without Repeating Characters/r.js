/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
    // left 전의 것들 다 지워버리기
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
};

// lengthOfLongestSubstring("abcabcbb"); // return 3

// lengthOfLongestSubstring("pwwkew"); // return 3

lengthOfLongestSubstring("dvdf"); // return 3
