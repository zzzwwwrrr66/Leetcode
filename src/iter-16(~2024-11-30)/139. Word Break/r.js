/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;

  // Create a Set of words from the array so that the
  // lookup cost in the Set becomes O(1)
  const wordSet = new Set(wordDict);

  // Initialize the lookup table
  const dp = new Array(n + 1).fill(false);

  // Set the first element to true as it represents the
  // empty string
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // Checking if the substring from j to i is
      // present in the wordSet and dp[j] is true
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        // If a substring is found, no need to check
        // further smaller substrings
        break;
      }
    }
  }

  // Return the last element of dp array
  return dp[n];
};

wordBreak("leetcode", ["leet", "code"]);
