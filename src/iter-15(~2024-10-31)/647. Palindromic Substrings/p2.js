/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 1) return 1;

  const n = s.length;
  const resVal = [];

  function recursion(l, r) {
    if (l < 0 || r >= n || s[l] !== s[r]) {
      return;
    }

    resVal.push(s.substring(l, r + 1));

    l -= 1;
    r += 1;

    recursion(l, r);
  }

  for (let i = 0; i < n; i++) {
    // odd
    recursion(i, i);
    // even
    recursion(i, i + 1);
  }

  return resVal.length;
};

countSubstrings("aaa");
// countSubstrings("abc");
