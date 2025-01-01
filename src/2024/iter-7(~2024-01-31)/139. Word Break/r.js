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
 * 2 loop 로 글자의 마지막을 true로 저장 
 * 첫번째 루프 는 1로 계속 돈다 
 * 두번째 루프는 i - 1로 마이너스하면서 돈다
 * 해당하는 단어가 나왔을때 그전의 단어가 true 이면 현재의 단어 마지막 index에 true 저장
cat
[true, false, false, true, false, false, false, false, false, false]

cats
[true, false, false, true, true, false, false, false, false, false]

and
[true, false, false, true, true, false, false, true, false, false]


 */
// cat
//[true, false, false, true, true, false, false, false, false, false]
