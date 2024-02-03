// 1. wordDict안의 단어의 조합들로 s 의 모든 단어를 지울수 있는지
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length;
  // s의 MEMO
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  // wordDict중 가장 큰거
  let max_len = Math.max(...wordDict.map((word) => word.length));

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
      const currS = s.substring(j, i);
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

// wordBreak("leetcode", ["leet", "code"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);

/**
cat
[true, false, false, true, false, false, false, false, false, false]

cats
[true, false, false, true, true, false, false, false, false, false]

 */
// cat
//[true, false, false, true, true, false, false, false, false, false]
