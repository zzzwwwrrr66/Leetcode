/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 1) {
    return 1;
  }
  let res = 0;
  const wordCountMap = new Map();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const word = s[right];
    let windowLen = right - left + 1;
    const currWordCnt = wordCountMap.get(word) + 1 || 1;
    wordCountMap.set(word, currWordCnt);

    const replaceWordCnt = windowLen - Math.max(...wordCountMap.values());
    if (replaceWordCnt > k) {
      const leftWord = s[left];
      wordCountMap.set(leftWord, wordCountMap.get(leftWord) - 1);
      left += 1;
    }
    windowLen = right - left + 1;
    res = Math.max(res, windowLen);
  }

  return res;
};
// characterReplacement("ABAB", 2);

// characterReplacement("ABABBA", 2); // return 4
characterReplacement("AABABBA", 1); // return 4
