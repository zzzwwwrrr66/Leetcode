/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 1) return s[0];

  const n = s.length;
  let resLen = 0;
  let resVal = [];

  for (let i = 0; i < n; i++) {
    // recursion 2개로 가도 상관없을듯 odd, even
    // odd
    let [l, r] = [i, i];
    while (l >= 0 && r < n && s[l] === s[r]) {
      resVal.push(s.substring(l, r + 1));
      l -= 1;
      r += 1;
    }

    // even
    [l, r] = [i, i + 1];
    while (l >= 0 && r < n && s[l] === s[r]) {
      resVal.push(s.substring(l, r + 1));
      l -= 1;
      r += 1;
    }
  }

  return resVal.length;
};

function recursion(l, r, res = []) {
  if (l < 0 || r >= n || s[l] !== s[r]) {
    return;
  }

  res.push(s.substring(l, r + 1));

  l -= 1;
  r += 1;

  recursion(l, r);

  return res;
}
countSubstrings("aaa");
countSubstrings("abc");
