/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s[0];

  const n = s.length;
  let resLen = 0;
  let resVal = "";

  for (let i = 0; i < n; i++) {
    // odd
    let [l, r] = [i, i];
    while (l >= 0 && r < n && s[l] === s[r]) {
      const currLen = r - l + 1;
      if (resLen < currLen) {
        resLen = Math.max(resLen, currLen);
        resVal = s.substring(l, r + 1);
      }
      l -= 1;
      r += 1;
    }

    // even
    [l, r] = [i, i + 1];
    while (l >= 0 && r < n && s[l] === s[r]) {
      const currLen = r - l + 1;
      if (resLen < currLen) {
        resLen = Math.max(resLen, currLen);
        resVal = s.substring(l, r + 1);
      }
      l -= 1;
      r += 1;
    }
  }

  return resVal;
};

longestPalindrome("babad"); // bab or aba
longestPalindrome("cbbd"); // bb

// handleIsPalindrome("aba");
// handleIsPalindrome("aacabdkacaa");
