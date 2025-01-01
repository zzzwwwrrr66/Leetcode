/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 서로다른 단어 얼마나 긴지
  //// 중복 된거 카운트 X
  const wordCnt = new Set();
  let left = 0;
  let res = 0;
  for (let right = 0; right < s.length; right++) {
    const currWord = s[right];
    while (wordCnt.has(currWord)) {
      wordCnt.delete(s[left]);
      left += 1;
    }

    wordCnt.add(currWord);
    res = Math.max(wordCnt.size, res);
  }
  return res;
};
lengthOfLongestSubstring("abcabcbb"); // return 3
lengthOfLongestSubstring("pwwkew"); // return 3
lengthOfLongestSubstring("bbbbb"); // return 1
lengthOfLongestSubstring("dvdf"); // return 3
