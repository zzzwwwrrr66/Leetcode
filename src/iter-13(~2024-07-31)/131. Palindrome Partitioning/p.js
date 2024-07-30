/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * Time O(N * 2^N) | Space O(N^2)
 * @param {string} s
 * @return {string[][]}
 */
function partition(s, left = 0, tmpList = [], res = []) {
  // 펠린드롬이 가능한 문자
  // subString 이 length-- 란 뜻으로 해석하면 되는건가..?

  // base case
  if (s.length <= left) {
    tmpList.length > 0 && res.push(tmpList.slice());
    return res;
  }

  for (let i = left; i < s.length; i++) {
    if (!isPalindrome(s, left, i)) {
      continue;
    }
    tmpList.push(s.slice(left, i + 1));
    partition(s, i + 1, tmpList, res);
    tmpList.pop();
  }

  return res;
}

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
console.log(partition("aab"));
/*
Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:

Input: s = "a"
Output: [["a"]]

 */
