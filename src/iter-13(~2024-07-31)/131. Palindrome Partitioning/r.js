/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * Time O(N * 2^N) | Space O(N^2)
 * @param {string} s
 * @return {string[][]}
 */
function partition(s, left = 0, tmpList = [], res = []) {
  const isBaseCase = s.length <= left;
  if (isBaseCase) {
    if (tmpList.length) res.push(tmpList.slice());

    return res;
  }

  for (let right = left; right < s.length; right++) {
    if (!isPalindrome(s, left, right)) continue;

    tmpList.push(s.slice(left, right + 1));
    console.log({ s });
    partition(s, right + 1, tmpList, res);
    tmpList.pop();
  }

  return res;
}

const isPalindrome = (str, left, right) => {
  while (left < right) {
    const isSame = str[left] === str[right];
    if (!isSame) return false;

    left++;
    right--;
  }

  return true;
};
console.log(partition("aab"));
Infinity;
/*
Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:

Input: s = "a"
Output: [["a"]]

 */
