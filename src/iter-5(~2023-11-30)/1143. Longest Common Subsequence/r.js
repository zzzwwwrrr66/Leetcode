// TODO: 분석해보기
var longestCommonSubsequenceRecursion = function (text1, text2) {
  const memo = new Map();
  return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

function recursion(text1, text2, index1, index2, memo) {
  // base cases
  if (index1 < 0 || index2 < 0) return 0;

  const key = index1 + "#" + index2;

  if (memo.has(key)) {
    return memo.get(key);
  }

  let result;
  // 끝자리수 같은지 확인
  if (text1.charAt(index1) === text2.charAt(index2)) {
    result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
  } else {
    result = Math.max(
      recursion(text1, text2, index1, index2 - 1, memo),
      recursion(text1, text2, index1 - 1, index2, memo)
    );
  }

  memo.set(key, result);
  return result;
}

console.log(longestCommonSubsequenceRecursion("ezupkr", "ubmrapg"));

var longestCommonSubsequenceDp = function (text1, text2) {
  const dp = [];
  let m = text1.length;
  let n = text2.length;

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // two  possible scenarioes:
      // 1. the current char of text1 and text2 does not match
      // 2. the current char of text1 and text2 matches

      if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
        // check left and top for longer subsequence length
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }

  return dp[m][n];
};
console.log(longestCommonSubsequenceDp("ezupkr", "ubmrapg"));
