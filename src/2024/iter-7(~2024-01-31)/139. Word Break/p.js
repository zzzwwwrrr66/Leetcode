/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const memo = Array(s.length + 1).fill(false);
  memo[0] = true;
  const maxLen = Math.max(...wordDict.map((w) => w.length));
  console.log({ memo, maxLen });

  for (let i = 1; i <= s.length; i++) {
    for (let j = i - 1; j >= Math.max(i - maxLen - 1, 0); j--) {
      const currWord = s.substring(j, i);
      console.log({ i, j, currWord });
      if (memo[j] && wordDict.includes(currWord)) {
        memo[i] = true;
      }
    }
    console.log("---");
    // console.log({ memo });
  }
  return memo[s.length];
};

// cats, dog,
// dog,

// wordBreak("leetcode", ["leet", "code"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
