// 공통 string count dp
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;

  // base error case
  if (n < 0 || m || 0) return 0;

  const countMap = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // countMap[i - 1][j - 1] 을 하는 이유..? => 전에꺼를 플러스 하는 느낌?
        countMap[i][j] = countMap[i - 1][j - 1] + 1;
      } else {
        countMap[i][j] = Math.max(countMap[i - 1][j], countMap[i][j - 1]);
      }
    }
  }

  return countMap[n - 1][m - 1];
};
console.log(longestCommonSubsequence("ezupkr", "ubmrapg"));
// console.log(longestCommonSubsequence("abcde", "ace"));

// text2 의 글자가 나타날때까지 기다림
