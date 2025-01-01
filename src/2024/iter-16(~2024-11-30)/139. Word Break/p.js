/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // for -> while ( 해당 단어가 없을때까지 )
  // loop s -> loop wordDict
  const n = s.length;
  const dp = Array(n + 1).fill(false);
  dp[n] = true;

  for (let i = n - 1; i >= 0; i--) {
    const currSWord = s[i];
    for (const word of wordDict) {
      if (dp[i]) {
        break;
      }
      if (i + word.length <= n && s.substring(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
      }
    }
  }

  return dp[0];
};
// recursion Tree 구조를 생각
// 4 에서 leet이 맞았으니 4에서 wordDict를 다시 recursion
// code 에서 맞았으니 currIndex는 8 이 된다 그러므로 8은 True의 숫자임
wordBreak("leetcode", ["leet", "code"]);
